import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import icon from './img/icons8-доллар-сша-в-круге.gif'
import styles from './Money.module.css';

const Money = () => {
    // const [count, setCount] = useState(0);

    const user = useSelector((state) => state.auth.user)

    return (
        <div className={styles.container}>
            <Link to="/buy">
                <span className={styles.counter}>{user?.coins || 0}</span>
                <img className={styles.icon} src={icon} alt="Money"/>
            </Link>
        </div>
    )
}

export default Money;
