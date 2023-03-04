import React, { Fragment } from 'react'
import { Container , Row , Col , Button } from 'react-bootstrap'
import './MailData.css'
import { useDispatch } from 'react-redux'
import { deleteMail } from '../store/MailAction'
const MailData = (props) => {
  const dispatch = useDispatch()

  const deleteMailHandler=()=>{
          dispatch(deleteMail(props.mail))
  }
  return (
    <Fragment>
    <Container>
        <Row>
        { props.toorFrom==="From" && !props.mail.read &&
          <Col xs={1}>
            <iconify-icon icon="ri:checkbox-blank-circle-fill" style={{color : "blue"}}></iconify-icon>
          </Col>}
          <Col xs={1}>{props.toorFrom}</Col>
          <Col xs={3}>
            <b>{props.mail.from}</b>
          </Col>
          <Col xs={5}>{props.mail.title}</Col>
          <Col xs={2}>
            <Button variant="danger" onClick={deleteMailHandler}>Delete</Button>
          </Col>
          <hr />
        </Row>
      </Container>
    </Fragment>
  )
}

export default MailData;