import React from 'react';
import { useNavigate } from 'react-router-dom';

import image from '../Image/myIange.jpg'

const Home = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} style={{ width: '400px', height: '500px' }} className="max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Daffodil International University</h1>
                        <p className="py-6 text-xl"> ID : 193-16-468 CIS -7 BATCH</p>


                        <button onClick={() => navigate('/')} className="btn btn-primary m-3">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;