import React from 'react'
import { useContext } from 'react'
import LoginContext from '../../store/LoginContext';

const Form = () => {

    const context = useContext(LoginContext);

    const {submitHandler, emailRef, pswRef, action} = context;

  return (
    <form onSubmit={submitHandler} className="inputs">

        <div className="input">
            <img src="" alt="" />
            <input ref={emailRef} type="email" placeholder='Email'/>
        </div>
        <div className="input">
            <img src=""  alt="" />
            <input ref={pswRef} type="password" placeholder='Password'/>
        </div>
        <button className='btn'><p className="text">{action === 'Log in' ? 'Log in' : "Sign up"}</p></button>
    </form>
  )
}

export default Form