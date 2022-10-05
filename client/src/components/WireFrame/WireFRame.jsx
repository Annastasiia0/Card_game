import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

function WireFRame() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default WireFRame;