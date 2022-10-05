import { NavLink, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from "react";
import styles from './NavBar.module.css';
import Money from "../Money";
import { useDispatch, useSelector } from 'react-redux'
import {authLogout, initUser} from "../../store/auth/actionCreator";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()


    const logoutHandler = (event) => {
      event.preventDefault()
      fetch('/auth/logout')
        .then(data => data.json())
        .then(responce => {
          if (responce.islogin === false) {
            dispatch(authLogout());
            navigate('/')
          }
        })
    }


    return (
        // ДОБАВИТЬ УСЛОВНЫЙ РЕНДЕРИНГ
        <div className={styles.container}>

                {user?.id ?
                  <>
                  <ul className={styles.list__container}>
                      <li><NavLink to="/home">Домой</NavLink></li>
                      {/*<li><NavLink to="/editdeck">Мои карточки</NavLink></li>*/}
                  <li><NavLink to='/pc'><Typography component="div" style={{fontFamily:'sans-serif', fontWeight:600,display:'block',margin:0}}>
                      <Box sx={{ textTransform: 'capitalize', m: 1 }} style={{fontFamily:'sans-serif', fontWeight:600,display:'block',margin:0}}>{`Hello, ${user.name}`}
                          <StyledBadge
                              overlap="circular"
                              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                              variant="dot"
                          >
                              <Avatar alt="Remy Sharp" src={user?.photo || ('https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg')} />
                          </StyledBadge>
                      </Box>
                  </Typography>
                  </NavLink>
                  </li>

                  {/*<li><NavLink to='/pc'>{`ПРИВЕТ,${user.name}!`}</NavLink></li>*/}
                  <li><NavLink to="/" onClick={logoutHandler}>Выйти</NavLink></li>
                  </ul>
                      <Money />



                  {/*<li><NavLink to='/pc'>{`Привет, ${user.name}!`}</NavLink></li>*/}
                  {/*<li><NavLink to="/" onClick={logoutHandler}>Выйти</NavLink></li>*/}
                  {/* <li><NavLink to="/editdeck">Мои карточки</NavLink></li> */}
                  </>
                :
                    <>
                    <ul className={styles.list__container}>
                        <li><NavLink to="/main">На главную</NavLink></li>
                    </ul>
                    </>
                }
        </div>
    )
}


export default NavBar;
