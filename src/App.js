
import { NavLink } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/UI/Home';
import SignUp from './Components/UI/SignUp';


function App() {

  return (
    <div>
   
      <Routes>
        <Route path="/" exact element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
