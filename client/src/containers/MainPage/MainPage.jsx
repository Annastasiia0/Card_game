import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { authLogout } from '../../store/auth/actionCreator';
// import NavBar from '../../components/NavBar';
import './MainPage.css';


const MainPage = () => {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
   

    // const logoutHandler = (event) => {
    //   event.preventDefault()
    //   fetch('/auth/logout')
    //     .then(data => data.json())
    //     .then(responce => {
    //       if (responce.islogin === false) {
    //         dispatch(authLogout());
    //         navigate('/')
    //       }
    //     })
    // }



    return (
        <div className='container'>
            <form className='form-container' action='/login' >
                <div className='buttons-container'>
              <button type='submit' className='auth-btn'>
                Авиторизация
              </button>
              <form  action='/registration'>
              <button  type='submit' className='rega-btn'>
              Регистрация
              </button>
              </form>
                </div>
            </form>
        </div>
    )
}


export default MainPage;
