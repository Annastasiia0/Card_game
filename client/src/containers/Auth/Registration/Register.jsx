import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Register.css';
import { authReg } from '../../../store/auth/actionCreator';

function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const regHandler = (event) => {
    event.preventDefault();
    if (event.target.password.value.length >= 8) {
      fetch('/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: event.target.name.value.trim(),
          email: event.target.email.value.trim(),
          password: event.target.password.value,
        }),
      }).then((responce) => responce.json())
        .then((responce) => {
          if (responce.isRegistration === false) {
            alert('Такой пользователь уже существует');
          } else {
            dispatch(authReg(responce));
            navigate('/home');
          }
        });
    } else {
      alert('Пароль должен содержать более 8 символов')
    }  
  };

  return (
    <div className="register-container">
    <div className="card">
      <div className="card-image">
        <h2 className="card-heading">Sign up</h2>
      </div>
      <form className="card-form" onSubmit={regHandler}>
        <div className="input">
          <input
            type="text"
            className="input-field"
            name="name"
            autoComplete="off"
            required
          />
          <label className="input-label">Name</label>
        </div>
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
            Registration
          </button>
        </div>
      </form>
    </div>
    </div>
    
  );
}
export default Register;
