import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { addMail } from '../Components/store/MailAction';
import MailData from '../Components/UI/MailData';
import { NavLink } from 'react-router-dom';
import {Col , Button} from 'react-bootstrap'
import { deleteMail } from '../Components/store/MailAction';
 const InboxEmail = () => {

  const dispatch = useDispatch()
  const deleteMailHandler=(mail)=>{
    dispatch(deleteMail(mail))
}

    const mails = useSelector((state)=>state.mail.mailData)
    const email = localStorage.getItem("email")
    const inboxMail = mails.filter(mail=>mail.to === email )

    const mailItem = inboxMail.map(mail=>(
      <div><NavLink to={`/inbox/${mail.id}`}> <MailData key={mail.id} mail={mail} toorFrom='From' /></NavLink><Col xs={2}>
      <Button mail={mail} onClick={deleteMailHandler(mail)} variant="danger">Delete</Button>
    </Col></div>
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