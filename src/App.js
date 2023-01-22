import logo from './logo.svg';
import './App.css';
 import Login from './login';

 import SignUp from './SignUp';
 import { Routes, Route, useNavigate } from "react-router-dom";



function App() {
return(
   <>
    
    <Routes>
<Route path='/' element={<Login/>} />
<Route path='/SignUp' element={<SignUp/>} />

    </Routes>
    
    </>

)
}

export default App;
