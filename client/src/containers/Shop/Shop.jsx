// import styles from '../../components/ShopCard/ShopCard.module.css';
import'./shop.css'
import { useState} from "react";
import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {buyDeck} from "../../store/shop/actionCreator";
import ShopCard from '../../components/ShopCard/ShopCard'
import {addToDeckFromShop} from "../../store/deck/actionCreators";
import {addCardToCollects} from "../../store/collectDeck/actionCreators";
const Shop = () => {
    const [state,setState] = useState(false)
    const dispatch = useDispatch()
    const shop = useSelector((state) => state.shop.shop)
    const collection = useSelector((state)=>state.collection.collection)
    // console.log(collection)
    const deck = useSelector((state) => state.deck.deck)
    const buy = async() => {
        const responce = await fetch('/buycards/new')
        const res = await responce.json()
        dispatch(buyDeck(res))
        setState(true)
        setTimeout(async ()=>{
            setState(false)
        },4000)
    }

    // const addToDeck = async () => {
    //     setState(true)
    //     const responce = await fetch('/buycards')
    //     const res = await responce.json()
    //     console.log(res)
    //     res.forEach(el=>{
    //         dispatch(addToDeckFromShop(el))})
    //     setState(false)
    // }


    return (
        <>
            <section className='shop-container'>
                <div className='button-shop-container'>
                <button className='button-shop' onClick={buy}>Купить пак</button></div>
                {state ? shop.map(el=><ShopCard key={el.id} name={el.name} imageString={el.imageString} info={el.info} attack={el.attack} health={el.health} mana={el.mana}/>) : <div/>}
                {/*{state ? <button onClick={addToDeck}>Добавить в колоду</button> : <div/> }*/}
            </section>
        </>
    )
}


export default Shop;
