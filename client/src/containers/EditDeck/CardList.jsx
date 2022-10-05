import styles from './CardList.module.css';
import {Link} from "react-router-dom";

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addCardToCollect, removeCardToCollect} from "../../store/collectDeck/actionCreators";

const CardList = ({id,deckId,name,photo_url,description,damage,health,manaCost}) => {
    const [state,setState] = useState(true)
    const dispatch = useDispatch()
    const addToDeck = async () => {
        setState(false)
        const responce = await fetch(`/mydeck/${deckId}/builddeck`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        })
        const res = await responce.json()
        if (res.status === 201){
            dispatch(addCardToCollect(res))
        }
    }

    const removeFromDeck = async () => {
        setState(true)
        const responce = await fetch(`/mydeck/${deckId}/del/${id}`, {
            method: 'DELETE',
        })
        const res = await responce.json()
        console.log(res)
        if (res.status === 200){

            dispatch(removeCardToCollect(id))
        }
    }

    return (
                <li className={styles.list__item}>

                        <div className={styles.Card}>
                            {state ?
                                <button onClick={addToDeck} className={styles.button}>add</button>
                                :
                                <button onClick={removeFromDeck} className={styles.button}>remove</button>
                            }
                            <div
                                className={styles.CardPortrait}
                                style={{ backgroundImage: `url(${photo_url})` }}
                            />
                            <div className={styles.CardMana}>{ manaCost || 0 }</div>
                            <h1 className={styles.CardName}>{name} </h1>
                            <h2 className={styles.CardDescription}>{description}</h2>
                            {damage ? <div className={styles.CardAttack}>{damage}</div> : <div/> }

                            {health ? <div className={styles.CardDefense}>{ health }</div> : <div />}
                            </div>


                </li>
    )
}



export default CardList;
