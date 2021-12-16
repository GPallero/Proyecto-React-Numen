import {shoppingInitialState, shoppingReducer} from "../reducer/shoppingReducer";
import {types} from "../actions/shoppingActions";                    
import {useReducer} from "react";
import Product from "../components/Product";
import CartItem from "./CartItem";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);  

    const {products, cart} = state;                 

    const addToCart =  (id) => {                
    //console.log(id)
    dispatch ( {type : types.ADD_TO_CART, payload:id })
    }

    const deleteFromCart = (id,all=false) => {
        console.log(id.all)
        if(all){
        dispatch({type: types.REMOVE_ALL_PRODUCTS, payload:id})
        } else {
        dispatch({type: types.REMOVE_ONE_PRODUCT, payload:id})
           }
        }
    const clearCart = ( ) => {
        dispatch ({type: types.CLEAR_CART })
    }

return (
<>
    <h2>Carrito de compras</h2>
    <h3>Productos</h3>
    <div className="box grid-responsive">
{products.map ((product) => (                              
    <Product key = {product.id} data={product} addToCart={addToCart} /> 
        ))}

    </div>
      <hr/>
      <h3>Cart</h3>
      <div className="box">
    {cart.map(( item, index ) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/> )}  

<button onClick = {clearCart} > Limpiar Carrito </button> 
    </div>
</>
)
    }
export default ShoppingCart 