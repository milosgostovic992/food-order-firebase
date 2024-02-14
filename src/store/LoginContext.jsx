import { createContext, useRef, useState, useMemo } from "react";
import { auth } from "../config/firebaseConfig";
import {useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const LoginContext = createContext();

export function LoginContextProvider({children}) {

    const emailRef = useRef();
    const pswRef = useRef();
    const [action, setAction] = useState('Admin');
    const history = useNavigate();

    const signOutHandler = ()=> {
        signOut(auth).then(value => {
        })
    };

    const signUpHandler = () => {
        setAction('Sign Up')
    };
    
    const loginHandler = () => {
        setAction('Log in')
    };

    const showAdminPanel = () => {
        setAction('Admin')
        console.log(action);
    };

    const submitHandler = (e, type) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const psw = pswRef.current.value;
        
        if (action === 'Sign Up') { // Check the type
            createUserWithEmailAndPassword(auth, email, psw).then(data => {
                console.log(data, 'authData');
                history("/home")
                })
                .catch(error => {
                    // Handle error
                    console.log(' invalid');
                 alert(error.code)
                });
        } 

        if (action === 'Log in') {
            signInWithEmailAndPassword(auth, email, psw).then(data => {
                console.log(data, 'authData');
                history("/home")
                })
                .catch(error => {
                    // Handle erro
                    console.log('invalid credential');
                 alert(error.code)
                });
        }

        if (action === 'Admin') {
           console.log('123');
            // signInWithEmailAndPassword(auth, email, psw).then(data => {
            //     console.log(data, 'authData');
            //     history(<Login/>)
            //     })
            //     .catch(error => {
            //         // Handle erro
            //         console.log('invalid credential');
            //      alert(error.code)
            //     });
        }

       };

       const value = useMemo(() => ({
        emailRef,
        pswRef,
        action,
        signUpHandler,
        loginHandler,
        submitHandler,
        signOutHandler,
        showAdminPanel
       }))

    return <LoginContext.Provider value={{...value}}>{children}</LoginContext.Provider>    

}

export default LoginContext