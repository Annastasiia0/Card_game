
import styles from './ShopCard.module.css';
import React from "react";
import {useSelector} from "react-redux";

const ShopCard = ({name,photo_url,description,damage,health,manaCost}) => {

    return (
        <>
            <div className={styles.Card}>
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
            </>
    )
}

export default ShopCard;
