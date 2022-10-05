import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

function HomePage() {

    const navigate = useNavigate()

    return (
        <>
            <div className='home-container'>
              <div className='button-container'>
                <div className='start-game-button-container'>


                <button onClick={() => window.location.href = 'http://localhost:63342/fp/client/FinalGame/index.html?_ijt=htaifocaed9k597dgvjgcnl5ke&_ij_reload=RELOAD_ON_SAVE'} className = 'start-game-btn'>


                    Играть
                </button>
                </div>
              </div>
              <div className='icons-container'>

                <div className='link-container-store' onClick={() => navigate('/buy')} />
                <div className='link-container-library' onClick={() => navigate('/mydeck')} />

                </div>
            </div>
        </>
    );
}

export default HomePage;
