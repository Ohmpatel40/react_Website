import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App_RAW';
import './index.css';

const Index_RAW = () => {
    return (
        <>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </>
    );
};

export default Index_RAW;
