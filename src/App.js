import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from "./layout/navbar"
import Alerta from "./layout/alerta";
import Pie from "./layout/footer"

function App() {
  return (
    <>
      {/* <Alert /> */}
      <Alerta/>
      <Navegacion/>
      <Pie/>
    </>
  );
}

export default App;
