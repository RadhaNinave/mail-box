import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { addMail } from '../Components/store/MailAction';
import MailData from '../Components/UI/MailData';
import { NavLink } from 'react-router-dom';
 const InboxEmail = () => {

    const mails = useSelector((state)=>state.mail.mailData)
    const email = localStorage.getItem("email")
    const inboxMail = mails.filter(mail=>mail.to === email )

    const mailItem = inboxMail.map(mail=>(
      <NavLink to={`/inbox/${mail.id}`}> <MailData key={mail.id} mail={mail} toorFrom='From' /></NavLink>
    ))
    console.log(mailItem)
   
   
  return (
    <div>
      <h1>inside inbox</h1>
    {mailItem}
    </div>
  )
}

export default InboxEmail;