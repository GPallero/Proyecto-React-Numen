import React from 'react';
import Gastronomia from './Gastronomia';
import Paquetes from './Paquetes';
import Bariloche from './images/Bariloche.jpg';
import Cataratas from './images/Cataratas.jpg';
import Salta from './images/Salta.jpg';
import Madryn from './images/Madryn.jpg';
// import MiCarousel from 'carousel';




const Main = () => {
    
    const infoPaquetes = [
    {
            id: 1,
            src: Bariloche, 
            nombre: "Bariloche",
            duracion: "4 días 3 noches",
            precio: 50000,
        },

        
            {
                id: 2,
                src: Cataratas,
                nombre: "Cataratas del Iguazú",
                duracion: "4 días 3 noches",
                precio: 45000
            },
        
            {
                id: 3,
                src: Salta,
                nombre: "Salta y Jujuy",
                duracion: "8 días 7 noches",
                precio: 80000
            },
                        {
                id: 4,
                src: Madryn,
                nombre: "Puerto Madryn",
                duracion: "6 días 5 noches",
                precio: 60000
            }
            ]

return (
    <div>
        {/* Sección 1 */}
        <Paquetes

        infoPaquetes={infoPaquetes}/>
         {/* Sección 3 */}
          {/* Sección 4 */}
           {/* Sección 5 */}
        <Gastronomia/>
        {/* <MiCarousel/> */}
    </div>

  );
}
 
export default Main