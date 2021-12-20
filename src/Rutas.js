import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ShoppingCart from './scripts/shoppingCart.js'
import Main from './components/Main'

const Rutas = () => {
    return(
    <Router>
         <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Carrito" element={<ShoppingCart/>} />
        </Routes>
    </Router>
    )
}

export default Rutas