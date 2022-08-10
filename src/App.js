import './App.css';
import Input from './components/Input/Input';
import Boton from './components/Boton/Boton';
import {useState} from 'react';


function App() {

  const [password,setValidar]=useState('252525');
  const [claveValida, setIsPasswordValid]=useState(false);

  return (
    
   <>
    <h1>Desafio estado de los componentes y eventos</h1>
    <Input  password={password} setIsPasswordValid={setIsPasswordValid}/>
    {claveValida ? <Boton/>:null}
   </>
  );
}

export default App;
