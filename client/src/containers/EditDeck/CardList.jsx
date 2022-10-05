import styles from './CardList.module.css';
// import {Link} from "react-router-dom";

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addCardToCollect, removeCardToCollect} from "../../store/initMyDeck/actionCreators";


const CardList = ({id,deckId,name,imageString,info,attack,health,mana,alreadyAdd}) => {



    const [state,setState] = useState(alreadyAdd)
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
        console.log(responce)
        if (responce.status === 201){
            // setLength((prev)=>prev+1)
            dispatch(addCardToCollect(res.cardone))
        }

    }

    const removeFromDeck = async () => {
        setState(true)
        const responce = await fetch(`/mydeck/${deckId}/del/${id}`, {
            method: 'DELETE',
        })
        const res = await responce.json()
        console.log(responce)
        if (responce.status === 200){
            // setLength((prev)=>prev-1)
            dispatch(removeCardToCollect(+id))
        }
    }

    return (
        <>
            {state ?
                <li className={styles.list__item}>
                    <div className={styles.Card}>
                            <button onClick={addToDeck} className={styles.button}>add</button>
                        <div
                            className={styles.CardPortrait}
                            style={{ backgroundImage: `url(${imageString})` }}
                        />
                        <div className={styles.CardMana}>{ mana || 0 }</div>
                        <h1 className={styles.CardName}>{name} </h1>
                        <h2 className={styles.CardDescription}>{info}</h2>
                        {attack ? <div className={styles.CardAttack}>{attack}</div> : <div/> }

                        {health ? <div className={styles.CardDefense}>{ health }</div> : <div />}
                    </div>
                </li>
            :
                <li className={styles.list__item}>
                    <div className={styles.Card__2}>
                        <button onClick={removeFromDeck} className={styles.button}>remove</button>
                        <div
                            className={styles.CardPortrait}
                            style={{ backgroundImage: `url(${imageString})` }}
                        />
                        <div className={styles.CardMana}>{ mana || 0 }</div>
                        <h1 className={styles.CardName}>{name} </h1>
                        <h2 className={styles.CardDescription}>{info}</h2>
                        {attack ? <div className={styles.CardAttack}>{attack}</div> : <div/> }

                        {health ? <div className={styles.CardDefense}>{ health }</div> : <div />}
                    </div>
                </li>
            }
        </>

    )
}



export default CardList;
