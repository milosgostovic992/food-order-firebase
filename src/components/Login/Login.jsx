import React from 'react'
import { useContext } from 'react';
import LoginContext from '../../store/LoginContext';
import Form from '../Form/Form';

const Login = () => {

    const context = useContext(LoginContext);
    const {signUpHandler, action, loginHandler} = context;

  return (
    <div className="container">
    <div className="submit-container">
       <button onClick={signUpHandler} type='button' className={action === "Log in" ? "btn innactive" : "btn"}>
            <p className="text">Sign Up</p>
       </button>
       <button onClick={loginHandler} type='button' className={action === "Sign Up" ? "btn innactive" : "btn"}>
           <p className="text">Login</p>
       </button>
   </div>
   <div className="login__header">
       <div className="text">
          {action}
       </div>
       <div className="underline"></div>
   </div>
   <Form/>
   {action === "Sign Up" ? '' :  <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
</div>
  )
}

export default Login