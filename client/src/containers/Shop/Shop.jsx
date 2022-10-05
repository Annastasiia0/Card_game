import styles from '../../components/ShopCard/ShopCard.module.css';
import {useEffect, useState} from "react";
import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {buyDeck} from "../../store/shop/actionCreator";
import ShopCard from '../../components/ShopCard/ShopCard'
import {addToDeckFromShop} from "../../store/deck/actionCreators";
const Shop = () => {
    const [state,setState] = useState(false)
    const dispatch = useDispatch()
    const shop = useSelector((state) => state.shop.shop)
    const deck = useSelector((state) => state.deck.deck)
    const buy = async() => {
        const responce = await fetch('/buycards/new')
        const res = await responce.json()
        dispatch(buyDeck(res))
        setState(true)
    }

    const addToDeck = async () => {
        setState(true)
        const responce = await fetch('/buycards')
        const res = await responce.json()
        console.log(res)
        res.forEach(el=>{
            dispatch(addToDeckFromShop(el))})
        console.log(deck)
        setState(false)
    }


    return (
        <>
            <section>
                <button onClick={buy}>Купить пак</button>
                {state ? shop.map(el=><ShopCard key={el.id} name={el.name} photo_url={el.photo_url} description={el.description} damage={el.damage} health={el.health} manaCost={el.manaCost}/>) : <div/>}
                {state ? <button onClick={addToDeck}>Добавить в колоду</button> : <div/> }
            </section>
        </>
    )
}


export default Shop;
