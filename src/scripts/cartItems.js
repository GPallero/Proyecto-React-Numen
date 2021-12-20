import {Button} from 'react-bootstrap'

const CartItem = ({data, deleteFromCart} ) => {
    const {id, name, price, quantity} = data;
    return (
        <div className="cart-item">
           <h4>Destino: {name}</h4>
           <h5>${price} x {quantity}</h5>
           <h5>=</h5>
           <h4>$ {price*quantity}</h4>
           <Button onClick={()=>deleteFromCart(id)}>Eliminar uno</Button>
           <Button onClick={()=>deleteFromCart(id,true)}>Eliminar todos</Button>
           <hr></hr>
        </div>
            )
    }
    export default CartItem