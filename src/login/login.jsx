import { Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../utils/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { createContext, useContext, useState } from 'react';

import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    // Sign in with google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user);
        } catch (error) {
            console.log(error);
        }
    } 
    
    //Sign in with Github
    const githubProvider = new GithubAuthProvider();
    const GithubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider)
            console.log(result.user);
        } catch (error) {
            console.log(error);
        }
    }
    
    //Sign in with Email and Password
    
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
        //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //   });    
        
        const [user] = useAuthState(auth)
        
        return (
            <>
            <div className="bg-[#0F0F0F] min-h-screen">
                <img className="absolute top-0 pointer-events-none" src="../images/loginCircles.png" alt="" />
                <div className="inline-block min-h-screen min-w-[500px] bg-black border-opacity-50">
                    <div className="text-white font-[Inter-Reg] text-[1.6rem] mt-[100px] px-[50px]">
                    
                    <div className="mb-[50px] cursor-pointer">
                        <img className="inline max-h-[30px]" src="./images/Vector 88.png" alt="" />
                        <a href='/' className="font-[TT-Travels-Next-Med] text-[1rem] text-mainPink ml-[10px]">CharlemagneDB</a>
                    </div>
                        <h1 className="font-[Inter-Bold]">Log in to your account</h1>
                        <h4 className='text-white opacity-80'>Don't have an account? <Link className="text-mainPink" to="/CharlamagneDB/signup">Sign Up</Link></h4>
                        <button 
                        onClick={GoogleLogin}
                        className="cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white min-w-[100%] py-[15px] rounded-[10px]">
                            <FaGoogle className='inline scale-[1.5] mr-[20px]'/>
                            Google
                        </button>
                        <button 
                        onClick={GithubLogin}
                        className="cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white min-w-[100%] py-[15px] rounded-[10px]">
                            <FaGithub className='inline scale-[1.5] mr-[20px]'/>
                            GitHub
                        </button>

                        <p className="text-[0.7rem] opacity-70 px-auto py-[10px]">Or with email and password.</p>
                        
                        <EmailErrorContext.Provider value={useState(false)}>
                            <EmailPasswordLoginForm />
                            <EmailError />
                        </EmailErrorContext.Provider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

const EmailErrorContext = createContext(null)

const EmailPasswordLoginForm = () => {
    const [providedEmail, setProvidedEmail] = useState('')
    const [providedPassword, setProvidedPassword] = useState('')
    const [emailErrorContext, setEmailErrorContext] = useContext(EmailErrorContext)

    const handleEmailFormSubmit = (input) => {
        input.preventDefault()
        
        const LoginDetails = {providedEmail, providedPassword}

        console.log(LoginDetails)
    }

    return (
        <>
        <form onSubmit={handleEmailFormSubmit}>
            <label className='mt-5 block text-[0.9rem]'>Enter email:</label>
            <input className="border-2 border-[#ff6200] bg-black rounded-[10px] text-[1.4rem]" type="text" required value={providedEmail} onChange={(e) => setProvidedEmail(e.target.value) & setEmailErrorContext(true)} />
            
            <label className='mt-5 block text-[0.9rem]'>Enter password:</label>
            <input className="border-2 border-[#ff6200] bg-black rounded-[10px] text-[1.4rem]" type="text" required value={providedPassword} onChange={(e) => setProvidedPassword(e.target.value)} />
            
            <button className='cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white py-[15px] px-[30px] rounded-[10px]'>Log In</button>
        </form>
        </>
    );
}


const EmailError = () => {
    const [emailErrorContext, setEmailErrorContext] = useContext(EmailErrorContext)

    return (
        <>
            <p className={(emailErrorContext === true ? "visible" : "hidden")}>Please fill in the email form</p>
        </>
    );
}