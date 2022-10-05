import React, {useEffect} from 'react'
import StartPage from "../StartPage";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
// import NavBar from "../../components/NavBar";
// import { GeistProvider, CssBaseline } from '@geist-ui/core'
import Card from "../../components/Card/Card";
import MyDeck from "../MyDeck/MyDeck";
import Register from "../Auth/Registration/Register";
import Login from "../Auth/Login/Login";
import Shop from "../Shop/Shop";
import {useDispatch, useSelector} from "react-redux";
import {initUser} from "../../store/auth/actionCreator";
import EditDeck from "../EditDeck/EditDeck";
import {initDeck} from "../../store/deck/actionCreators";
import HomePage from '../HomePage/HomePage';
import WebSock from "../Game/WebSock";
// import { deckLoad } from '../../store/deck/actionsCreator';
import WireFRame from '../../components/WireFrame/WireFRame';
import {initMyDeck} from "../../store/initMyDeck/actionCreators";

import PersonaCab from "../PersonalCab/PersonaCab";
import {initCollection} from "../../store/collectDeck/actionCreators";





function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    // const myDeckCollection = useSelector((state)=>state.myCreateDeck.myCreateDeck)

    const checkUser = async () => {
        const responce = await fetch('/main')
        const res = await responce.json()
            dispatch(initUser(res))
    }
    const getCards = async () => {
        const responce = await fetch('/getcards')
        const res = await responce.json()
        dispatch(initDeck(res))
    }

    const getCollections = async () => {
        const responce = await fetch('/getcards')
        const res = await responce.json()
        dispatch(initCollection(res))
    }

  

    useEffect(()=>{
        checkUser()
        getCards()
        getCollections()
    },[])
  return (
 <div>
     <BrowserRouter>
         {/* <NavBar/> */}
         <Routes>
             <Route path='/' element={<StartPage />} />
            <Route element={<WireFRame />}>
             <Route path='/registration' element={<Register/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/main' element={<MainPage />} />
             {user?.id &&
             <>
             <Route path='/card' element={<Card/>} />
                 <Route path='/pc' element={<PersonaCab/>} />
             <Route path='/buy' element={<Shop/>} />
             <Route exact path='/mydeck' element={<MyDeck/>} />
             <Route path='/mydeck/:id' element={<EditDeck/>} />
                 {/*<Route path='/game' element={<Game/>}/>*/}
             </>
             }
             <Route path='room' element={<WebSock/>}>
                 <Route path=':roomID' element={<WebSock/>}/>
                 </Route>
             <Route path='/home' element={<HomePage />} />
             </Route>
         </Routes>
     </BrowserRouter>
 </div>
  )
}

export default App;
