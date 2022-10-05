

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


const EditDeck = () => {
    const {id} = useParams()
    const collection = useSelector((state)=>state.collection.collection)
    const dispatch = useDispatch()
    const initCards= async ()=> {
        const responce = await fetch('/getcards')
        const res = await responce.json()
        dispatch(initCollection(res))
    }
    useEffect(()=>{
        initCards()
    },[])

    return (
        <>
            <div style={{top:'30px',fontSize:'24px'}}>{collection.length}/30</div>
            <ul className={styles.list__container}>
            {collection ? collection.map(el => <CardList deckId={id} key={el.id} id={el.id} name={el.name} photo_url={el.photo_url} description={el.description} damage={el.damage} health={el.health} manaCost={el.manaCost}/>)
                :
                <div/>
            }
            </ul>
                </>
    )
}


export default EditDeck;
