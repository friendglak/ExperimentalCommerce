import React from 'react';
import {  homeObjOne } from './Data';
import Presentation from '../../components/Presentation.jsx';


const Home = () => {
    return (
        <>
            <Presentation {...homeObjOne} />          
        </>
    );
};

export default Home;
