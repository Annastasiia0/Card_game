
import styles from './ShopCard.module.css';
import React from "react";
import {useSelector} from "react-redux";

const ShopCard = ({name,imageString,info,attack,health,mana}) => {
// будем добавлять качество?!
    return (
        <>
            <div className={styles.Card}>
                <div
                    className={styles.CardPortrait}
                    style={{ backgroundImage: `url(${imageString})` }}
                />
                <div className={styles.CardMana}>{ mana || 0 }</div>
                <h1 className={styles.CardName}>{name} </h1>
                <h2 className={styles.Cardinfo}>{info}</h2>
                {attack ? <div className={styles.CardAttack}>{attack}</div> : <div/> }
                {health ? <div className={styles.CardDefense}>{ health }</div> : <div />}
            </div>
            </>
    )
}

export default ShopCard;
