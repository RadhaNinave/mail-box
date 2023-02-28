import { useRef, useState } from "react";
import { Form,Container,Button } from "react-bootstrap";

const SignUp = () =>{
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const[isLogin ,setIsLogin] = useState(false);
    const switchAuthModeHandler = () =>{
            setIsLogin((prev)=>!prev)
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
        let url="";
        if(isLogin){
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApiwh-3F97uenUG5CIBKT3F95neoK16n8";

        }
        else{
            url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApiwh-3F97uenUG5CIBKT3F95neoK16n8"
        }
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email: enteredEmail,
                password : enteredPassword,
                returnSecureToken : true 
            }),
            headers :{'Content-type':'application/json'},
        }).then(res=>{
            if(res.ok){
                return res.json()
            }
            else{
                return res.json().then((data)=>{
                    let errorMessage="";
                    if(data && data.error &&  data.error.message){
                            errorMessage=data.error.message;
                    }
                    throw new Error(errorMessage)
                })

            }
        }).then(data=>{
            console.log("SignUp success");

        }).catch(err =>{
            alert(err.message);
        })
        }
    return(
        <Container className='pt-5'>
        <Form className='pt-3' onSubmit={submitHandler} >
            <h1 className='text-center' >{isLogin ? 'Log In' : "Sign Up"}</h1>
            <Form.Group className="mb-3">
                <Form.Label htmlFor='email'>Email address</Form.Label>
                <Form.Control id='email' type="email" placeholder="Enter email" required  ref={emailInputRef}/>

            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control id='password' type="password" placeholder="Password" required  ref={passwordInputRef}/>
            </Form.Group>

           {!isLogin && <Form.Group className="mb-3">
                <Form.Label htmlFor='password'>Confirm Password</Form.Label>
                <Form.Control id='password' type="password" placeholder="ConfirmPassword" required  ref={passwordInputRef}/>
            </Form.Group>}

             <Button variant="primary" type="submit">
                {isLogin ? 'Log In' : "Sign Up"}
            </Button>


            <div className='text-center pt-3'>
                <button type='button' onClick={switchAuthModeHandler}>

                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </div>
            <div className='text-center pt-3'>

            </div>


        </Form>
    </Container>

    );

}
export default SignUp;