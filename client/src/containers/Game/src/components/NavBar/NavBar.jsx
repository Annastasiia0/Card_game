import { NavLink } from "react-router-dom";
// import { useState, useEffect} from "react";

// import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
//
// import imgSpaceStation from './img/space-station.svg';
// import imgDroid from './img/droid.svg';
// import imgLightsaber from './img/lightsaber.svg';
import styles from './NavBar.module.css';
import Money from "../Money";
import {useDispatch, useSelector} from "react-redux";
import {logoutUserAC} from "../../redux/actionCreators/logoutUserAC";


const NavBar = () => {
    // const {user}=useSelector(state=>state.user)
    const dispatch=useDispatch()

    const logout = async () => {
        const res = await fetch('http://localhost:4000/logout',{
            method:"GET",
            credentials: 'include',
        })
        const result = await res.json()
        console.log(result)
        if (res.status <400) {
            dispatch(logoutUserAC(result.id))
        }
    }
    // const isTheme = useTheme()
    // const [icon, setIcon] = useState(imgSpaceStation);
    // useEffect(()=>{
    //     switch (isTheme.theme) {
    //         case THEME_LIGHT:setIcon(imgLightsaber);break
    //         case THEME_DARK: setIcon(imgSpaceStation); break;
    //         case THEME_NEUTRAL: setIcon(imgDroid); break;
    //         default: setIcon(imgSpaceStation);
    //     }
    // },[isTheme])

    return (
        // ДОБАВИТЬ УСЛОВНЫЙ РЕНДЕРИНГ
        <div className={styles.container}>
            {/*<img className={styles.logo} src={icon} alt="Star Wars"/>*/}
            <ul className={styles.list__container}>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to='/pc'>ПРИВЕТ,ИМЯ!</NavLink></li>
                <li><NavLink to='/' onClick={logout}>Logout</NavLink></li>
                <li><NavLink to="/registration">Registration</NavLink></li>
            </ul>
            <Money />
        </div>
    )
}


export default NavBar;
