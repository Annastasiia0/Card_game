import React, {useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './mydeck.css'
import CardforDeck from './Card/CardforDeck'
// import { Modal, Button, Input } from '@geist-ui/core'
import { createDeck, deckLoad } from '../../store/deck/actionsCreator'
// UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function MyDeck() {
  const user = useSelector(state => state.auth.user)
  const ref = useRef()
  const dispatch = useDispatch()
  const myDeck = useSelector(state => state.deck.myDeck)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [state, setState] = useState(false)
  // const handler = () => setState(true)
  // const closeHandler = (event) => {
  //   setState(false)
  // }

    // получение всех колод пользователя
    useEffect(() => {
      fetch('/mydeck')
      .then(data => data.json())
      .then(responce => dispatch(deckLoad(responce)))
    }, [dispatch])

  const deckCreateHandle = async (event) => {
    const name = ref.current.value
    if (name.length > 0) {
      handleClose()
      const data = await fetch('/create', {
        method: 'POST',
        body: JSON.stringify({name, id: user.id}),
        headers: {
          "Content-Type": "application/json",
        },
  
      })
      const responce = await data.json()
      dispatch(createDeck(responce))
    } else {
      alert('Название не может быть пустым')
    }
  }



  return (
    <>
    <div className="myDeck-container">
      <div><h4>Мои колоды</h4></div>
      <form onSubmit={deckCreateHandle} className="button--form">
      <div>
      <Button className="modal-btn" variant="contained" onClick={handleOpen}>Добавить колоду</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className="modal__title" variant="h6" component="h2">
            Создание колоды
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input ref={ref} name="idc" placeholder="Имя" autoComplete="off" />
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" marginTop="15px">
          <Button onClick={deckCreateHandle} className="btn-modal-create" variant="contained" color="success">Создать</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
          {/* <Button auto onClick={handler}>Добавить колоду</Button>
          <Modal className="modal-container" visible={state} onClose={closeHandler}>
            <Modal.Title className="modal-title">Добавление колоды</Modal.Title>
            <Modal.Content>
              <Input className="modal-input" ref={ref} name="idc" placeholder="Имя колоды" />
            </Modal.Content>
            <Modal.Action className="modal-btn" passive onClick={() => setState(false)}>Cancel</Modal.Action>
            <Modal.Action className="modal-btn" onClick={deckCreateHandle}>Create</Modal.Action>
          </Modal> */}
        </form>
        <div className="cardss-container">
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
