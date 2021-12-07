import React from 'react';
import Seccion1 from './Main/seccion1'
import Micarousel from './Main/carousel'
import Gastronomia from './Main/Gastronomia'
import Paquetes from './Main/PaquetesMap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
    return (
    <>
        <Seccion1/>
        <Paquetes/>
        <div className="App">
         <header className="App-header">
          <Micarousel />
        </header>
        </div>

          <Gastronomia/>


    </>
      );
}
 
export default Main;
