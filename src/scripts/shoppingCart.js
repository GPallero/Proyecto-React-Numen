import {shoppingInitialState, shoppingReducer} from "../components/reducer/shoppingReducer";
import {types} from "../components/actions/shoppingActions";                    
import {useReducer} from "react";
import Product from "./product";
import CartItem from "./cartItems";
import {Col, Row, Button} from 'react-bootstrap'

const ShoppingCart = () => {

    
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);  

    const {products, cart} = state;                 

    const addToCart =  (id) => {                
   
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


    <h3>Lista de deseos</h3>
    <h2>Paquetes turísticos</h2>
    <Row>
<Col style={{width:"100%"}}>
{products.map ((product) => (    
    <Row  sm={6} md={4} lg className="border" style={styles.paquete}>
    <Product key = {product.id} data={product} addToCart={addToCart} /> 
    </Row>
  ))}
</Col>

<Col sm={8} md={6} lg= {4} className="border" style={styles.cart}>
  <Row>
    <h3 style={{backgroundColor:"#FF673C", margin:"0"}}>Carrito</h3>
    <hr></hr>
  </Row>
  <Row>   
    {cart.map(( item, index ) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/> )}  
  </Row>
  <Row className="justify-content-center">
    {/* <h3 style={{backgroundColor:"#FF663C", marginBottom:"20px", padding:"0"}}>Total del carrito:</h3>  */}
        
    <Button href="/" variant="primary" style={{width: "200px"}} onClick = {clearCart} > Comprar </Button> 
    <Button variant="secondary" style={{width: "200px"}} onClick = {clearCart} > Limpiar Carrito </Button> 
    
  </Row>
</Col>
</Row>
</>
)
    }
export default ShoppingCart 

const styles = {
    paquete: {
        backgroundColor: "#F7F5F0",
        borderRadius: "10px",
        borderColor: "black",
        gap: "3em",
        textAlign: "center",
        overflow: "hidden",
        marginBottom: "20px",
        margin: "10px",
        },

    cart: {
        backgroundColor: "#F7F5F0",
        borderRadius: "10px",
        borderColor: "black",
        gap: "4em",
        textAlign: "center",
        margin:"10px",
        overflow:"hidden",
        
    }

  
};