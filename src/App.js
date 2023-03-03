
import { NavLink } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/UI/Home';
import SignUp from './Components/UI/SignUp';
import ComposeMail from './Pages/ComposeEmail';


function App() {

  return (
    <div>
   
      <Routes>
        <Route path="/" exact element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/compose' element={<ComposeMail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
