import { useDispatch,useSelector } from "react-redux";
import { authAction } from "../store/Auth";
import Auth from "../store/Auth";
import { replacemail,updateMail } from "../store/MailAction";
const Home =() =>{
    const dispatch = useDispatch()

    const isLoggedIn =useSelector(state=>state.auth.isLoggedIn)
    const firstTime = useSelector(state=>state.mail.firstTime)
    const currentMail = useSelector(state=>state.mail.mailData)
    console.log(isLoggedIn)
    console.log(firstTime)
  
    if(isLoggedIn && firstTime){
      const loggedEmail = localStorage.getItem('email');
      const emailUrl = loggedEmail.replace("@","").replace(".","")
     dispatch(replacemail(emailUrl , loggedEmail))
    } 
    setInterval(()=>{
      if(isLoggedIn){
        const loggedEmail = localStorage.getItem('email');
        const emailUrl = loggedEmail.replace("@","").replace(".","") 
        dispatch(updateMail(emailUrl , loggedEmail , currentMail))
      }
    } , 2000)
  

    return(
   
        <div>Welcome to Mail box</div>
    )

}
export default Home;