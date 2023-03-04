import { Nav,Navbar, Container,Button} from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate,NavLink } from "react-router-dom";
import { authAction } from "../store/Auth";
const  Navigation = () =>{
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const unReadMessage = useSelector(state=>state.mail.unReadMessage)
    const show = useSelector(state=>state.auth.isLoggedIn)
    const logoutHandler=()=>{
        dispatch(authAction.logout())
        navigate('/')
    }
    return(
        <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand >React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {show && <NavLink style={{fontWeight : "bold" , padding:5+"px"}} to='/compose'>Compose Email</NavLink>}
          {show && <NavLink style={{fontWeight : "bold" , padding:5+"px"}} to='/inbox' >Inbox Email {unReadMessage} </NavLink>}
          {show && <NavLink style={{fontWeight : "bold" , padding:5+"px"}} to='/sent' >Sent Email</NavLink>}


        </Nav>
        {show && <Button onClick={logoutHandler} className='float-right mr-3'>Logout</Button>}
       

      </Navbar.Collapse>
    </Container>
  </Navbar>
    );

}
export default Navigation;