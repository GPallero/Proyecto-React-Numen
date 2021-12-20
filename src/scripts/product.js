import {Button, Row, Col} from 'react-bootstrap'

const Product = ({data,addToCart}) => {
    const{id,name,price,descripcion,duracion, src} = data;
    return (
    <Row className="product" style={{display: "flex", gap: "2em", width: "100%", alignItems: "center", padding: "10px"}}>
    <Col><h4> {name}</h4>
        <p>{duracion}</p>
        <img style={{ margin: "0", padding: "0", width: "200px", height: "100px", borderRadius:"5px"}} alt="foto" src={src}></img>
    </Col>
    <Col>
        
        <p>{descripcion}</p>
        <h5> $ {price}</h5>
        <Button style={{height: "50px", textAlign:"right"}} onClick={( )=>addToCart (id)}> Agregar al carrito </Button>
        
        </Col>
    
    </Row>
    )
    }
    export default Product