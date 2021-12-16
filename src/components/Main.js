import React from 'react';
import Seccion1 from './Main/seccion1'
import Micarousel from './Main/carousel'
import Gastronomia from './Main/Gastronomia'
import Paquetes from './Main/PaquetesMap'
import Rectangle13 from './Main/rectangle_13.js'
import Section3 from "./Main/section_3.js"
import Section4 from "./Main/section_4.js"
import 'bootstrap/dist/css/bootstrap.min.css'


const Main = () => {
    return (
    <>
        <Seccion1/>
        <Paquetes/>
        <Section3/>
        <Section4/>
        <Rectangle13/>
        <Gastronomia/>
        <Micarousel />


    </>
      );
}
 
export default Main;
