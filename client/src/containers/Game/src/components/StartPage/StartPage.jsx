import './StartPage.css';
import anime from 'animejs/lib/anime.es.js';
import {useEffect} from "react";
import stars from "./img/stars.png";
import moon from "./img/moon.png";
import mountains_behind from "./img/mountains_behind.png";
import mountains_front from "./img/mountains_front.png";
import {Link} from "react-router-dom";

const StartPage = () => {
useEffect(()=>{
    var animation = anime.timeline({
        autoplay:false,
    });
    animation.add({
        targets: '#btn',
        top:'1500px',
        duration: 500,
        easing: 'easeInOutSine'
    })
    animation.add({
        targets: '#stars',
        top:'0px',
        duration: 1000,
        easing: 'easeInOutSine'
    })

    animation.add({
        targets: '#mount_behind',
        bottom:'0px',
        duration: 1000,
        easing: 'easeInOutSine'
    })

    animation.add({
        targets: '#moon',
        top:'0px',
        duration: 1000,
        easing: 'easeInOutBack'
    })

    animation.add({
        targets: '#mount_front',
        bottom:'0px',
        duration: 1000,
        easing: 'easeInOutSine'
    })

    animation.add({
        targets: '#textok',
        duration: 1000,
        marginRight:0,
        easing: 'easeInOutBack'
    })

    animation.add({
        targets: '#btn',
        top:'50%',
        duration: 1000,
        easing: 'easeInOutBack'
    })
    // animation.add({
    //     targets: '#linktoreg',
    //     top:'40%',
    //     duration: 1000,
    //     easing: 'easeInOutBack'
    // })
    document.querySelector('#btn').onclick = animation.play()
},[])
return (
    <div className='start_div'>
    <section>
        <img src={stars} id='stars' alt='stars' />
        <img src={moon} id='moon' alt='moon' />
        <img src={mountains_behind} id='mount_behind' alt='mount_behind' />
        <h2 id='textok'>Welcome to the <span>Card Game</span></h2>
        <Link to='/main' id="btn">Start</Link>
        <img src={mountains_front} id='mount_front' alt='mount_front' />
    </section>
    </div>
);
}

export default StartPage
