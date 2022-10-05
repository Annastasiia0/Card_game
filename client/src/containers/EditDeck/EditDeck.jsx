

import styles from './EditDeck.module.css';
import {useEffect,useState} from "react";
import {initUser} from "../../store/auth/actionCreator";
import ShopCard from "../../components/ShopCard/ShopCard";
import React from "react";
import CardList from "./CardList";
import {useDispatch, useSelector} from "react-redux";
import {initDeck} from "../../store/deck/actionCreators";
import {initCollection} from "../../store/collectDeck/actionCreators";
import {useParams} from "react-router-dom";
import {initMyDeck} from "../../store/initMyDeck/actionCreators";
import ManaCost from "./ManaCost/ManaCost";


const EditDeck = () => {
    const [state,setState] = useState(null)
    const arr = [1,2,3,4,5,6,7,8,9,10]

    const {id} = useParams()
    const collection = useSelector((state)=>state.collection.collection)
    console.log(collection)
    const myDeckCollection = useSelector((state)=>state.myCreateDeck.myCreateDeck)
    console.log(myDeckCollection)
    // const [length,setLength] = useState(myDeckCollection.length)
    // console.log(myDeckCollection)
    // const myDeck = useSelector(state => state.deck.myDeck)
    const dispatch = useDispatch()
    const initCards= async ()=> {
        const responce = await fetch('/getcards')
        const res = await responce.json()
        dispatch(initCollection(res))
    }

    const findCardFromDeck = async ()=> {
        const responce = await fetch(`/show/${id}`)
        const res = await responce.json()
        dispatch(initMyDeck(res.Cards))
        setState(res.Cards.map(el=>el.id))
    }

    // const initCardFromDeck = async ()=> {
    //     const responce = await fetch(`/show/${id}/all`)
    //     const res = await responce.json()
    //     dispatch(initMyDeck(res.Cards.length))
    //     // setState(res.Cards.map(el=>el.id))
    // }

    useEffect(()=>{
        findCardFromDeck()
        initCards()
    },[])

    // useEffect(()=>{
    //     initCardFromDeck()
    // },[])

    return (
        <>
            <div style={{top:'30px',fontSize:'24px',position:'fixed',zIndex:33,color:'red',right:'0%'}}>{myDeckCollection.length}/30</div>
            <ul className={styles.list__container}>
                {arr.map(el=><ManaCost key={el} deckId={id} number={el} />)}
            </ul>
            <ul className={styles.list__container}>
            {(state && collection) ? collection.map(el =>{
                const added = !state.includes(el.id) //true || false
                return <CardList alreadyAdd={added} deckId={id} key={el.id} id={el.id} name={el.name} imageString={el.imageString} info={el.info} attack={el.attack} health={el.health} mana={el.mana}/>
                })
            :
                <div/>
            }
            </ul>
                </>
    )
}


export default EditDeck;
