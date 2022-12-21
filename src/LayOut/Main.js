import React from 'react';
import { Outlet } from 'react-router-dom';
import HomePage from '../Components/HomePage/HomePage';

const Main = () => {
    return (
        <div>
            <HomePage></HomePage>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;