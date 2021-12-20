import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Rutas from './Rutas';
import Footer from './components/Footer';
import Header from './components/Header.js'

function App() {
  return (
  <>
    <header>
    <Header/>
    </header>
    <main>
       <Rutas/>
     </main>
     <footer>
       <Footer/>
     </footer>
   </>
  )
}

export default App
