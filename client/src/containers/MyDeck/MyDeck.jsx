import React, {useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './mydeck.css'
import CardforDeck from './Card/CardforDeck'
import { Modal, Button, Input } from '@geist-ui/core'
import { createDeck } from '../../store/deck/actionsCreator'

function MyDeck() {
  const user = useSelector(state => state.auth.user)
  const ref = useRef()
  const dispatch = useDispatch()
  const myDeck = useSelector(state => state.deck.myDeck)
  const [state, setState] = useState(false)
  const handler = () => setState(true)
  const closeHandler = (event) => {
    setState(false)
  }

  const deckCreateHandle = async (event) => {
    const name = ref.current.value
    setState(false)
    const data = await fetch('/create', {
      method: 'POST',
      body: JSON.stringify({name, id: user.id}),
      headers: {
        "Content-Type": "application/json",
      },

    })
    const responce = await data.json()
    dispatch(createDeck(responce))
  }



  return (
    <>
    <div className="myDeck-container">
      <div><h4>Мои колоды</h4></div>
      <form onSubmit={deckCreateHandle} className="button--form">
          <Button auto onClick={handler}>Добавить колоду</Button>
          <Modal className='modal-container' visible={state} onClose={closeHandler}>
            <Modal.Title className='modal-title'>Добавление колоды</Modal.Title>
            <Modal.Content>
              <Input className='modal-input' ref={ref} name="idc" placeholder="Имя колоды" />
            </Modal.Content>
            <Modal.Action className='modal-btn' passive onClick={() => setState(false)}>Cancel</Modal.Action>
            <Modal.Action className='modal-btn' onClick={deckCreateHandle}>Create</Modal.Action>
          </Modal>
        </form>
        <div className='cardss-container'>
      {myDeck?.length ? (
        myDeck.map((deck) => (
          <CardforDeck key={deck.id} deck={deck} />
          ))
          ) : <div/>}
          </div>

    {/* </div> */}
    </div>
    </>
  )
}

export default MyDeck
