import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../../store/auth/actionCreator';
import './Login.css'

function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logHandler = (event) => {
    event.preventDefault()
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: event.target.email.value.trim(),
        password: event.target.password.value,
      }),
    }).then((responce) => responce.json())
      .then(response => {
        if (response.islogin === false) {
          alert('Логин или пароль не совпадает')
        } else {
          dispatch(authLogin(response));
          navigate('/home')
        }
      })
  }

  return (
    <div className="login-container">
    <div className="card">
      <div className="card-image">
        <h2 className="card-heading">Sign in</h2>
      </div>
      <form className="card-form" onSubmit={logHandler}>
        <div className="input">
          <input
            type="text"
            className="input-field"
            name="email"
            autoComplete="off"
            required
          />
          <label className="input-label">Email</label>
        </div>
        <div className="input">
          <input
            type="password"
            className="input-field"
            name="password"
            autoComplete="off"
            required
          />
          <label className="input-label">Password</label>
        </div>
        <div className="action">
          <button type="submit" className="action-button">
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
