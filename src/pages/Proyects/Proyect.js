import React from 'react';
import { homeObjFour, homeObjThree, homeObjTwo } from './Data';
import Proyects from '../../components/Proyects.jsx';


const Proyect = () => {
    return (
        <>
            <Proyects {...homeObjTwo} />
            <Proyects {...homeObjThree} />
            <Proyects {...homeObjFour} />
        </>
    );
};

export default Proyect;
