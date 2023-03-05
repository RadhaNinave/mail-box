
import { NavLink } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/UI/Home';
import Navigation from './Components/UI/Navigation';
import SignUp from './Components/UI/SignUp';
import ComposeMail from './Pages/ComposeEmail';
import InboxEmail from './Pages/Inbox';
import MailPage from './Components/UI/MailPage';
import SentEmail from './Pages/Sent';

function App() {

  return (
    <div>
   <Navigation />
      <Routes>
        <Route path="/" exact element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/compose' element={<ComposeMail/>}></Route>
        <Route path="/inbox/*" element={<InboxEmail/>} />
        <Route path="/sent/*" element={<SentEmail/>}/>
        <Route path="/:id" element={<MailPage />} />
        

        <Route path='/sent/id' element={<SentEmail/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
