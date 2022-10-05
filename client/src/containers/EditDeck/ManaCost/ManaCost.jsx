import styles from './ManaCost.module.css';
import React, {useState,useEffect} from "react";
import img from './img/hearthstone.svg'
import {useDispatch} from "react-redux";
import {filterCollection, initCollection} from "../../../store/collectDeck/actionCreators";
import {initDeck} from "../../../store/deck/actionCreators";


const ManaCost = ({number,deckId}) => {
    const [state,setState] = useState(false)
    console.log(state)
    const dispatch = useDispatch()
    const findCards = async () => {
        const res = await fetch(`/mydeck/${deckId}/filter/${number}`)
        setState(true)
        const result = await res.json()
        dispatch(filterCollection(result))
    }

    const initCards = async ()=> {
        const responce = await fetch('/getcards')
        const res = await responce.json()
        setState(false)
        dispatch(initCollection(res))
    }

    useEffect(()=>{
        initCards()
    },[])

    return (
        <>
                <li style={{width:'100px',height:'100px',top:'50px',marginTop:'100px'}} >
                    {!state ?
                        <div onClick={findCards}>
                            <div style={{top: '50%'}}>{number}</div>
                            <img src={img} alt='cost'/>
                        </div>
                        :
                        <div onClick={initCards} className={styles.class2}>
                            <div style={{top: '50%'}}>{number}</div>
                            <img  className={styles.class1} src={img} alt='cost'/>
                        </div>
                    }
                </li>
        </>
    )
}


export default ManaCost;
