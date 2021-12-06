import {useState} from "react";
import {Button, Alert} from "react-bootstrap";

const Alerta = () => {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="primary" className="text-center" style={{fontSize:"14px"}} onClose={() => setShow(false)} dismissible>
          
          <p>
            Best Page Ever !
          </p>
        </Alert>
      );
    }
    return (
        null
    );
  }
  
  export default Alerta;