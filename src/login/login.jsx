import { Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../firebase/firebaseAuth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { constructUrl } from '../utils/urlutils';

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

    const [user] = useAuthState(auth)
    console.log(user)
        return (
            <>
            <div className="bg-[#0F0F0F] min-h-screen">
                <img className="absolute top-0 pointer-events-none" src={constructUrl("../images/loginCircles.png")} alt="" />
                <div className="inline-block min-h-screen min-w-[500px] bg-black border-opacity-50">
                    <div className="text-white font-[Inter-Reg] text-[1.6rem] mt-[100px] px-[50px]">
                    
                    <div className="mb-[50px] cursor-pointer">
                        <img className="inline max-h-[30px]" src={constructUrl("./images/Vector 88.png")} alt="" />
                        <a href={constructUrl('/')} className="font-[TT-Travels-Next-Med] text-[1rem] text-mainPink ml-[10px]">CharlemagneDB</a>
                    </div>
                        <h1 className="font-[Inter-Bold]">Log in to your account</h1>
                        <h4 className='text-white opacity-80'>Don't have an account? <Link className="text-mainPink" to={constructUrl("/signup")}>Sign Up</Link></h4>
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

                        <p className="text-[0.7rem] opacity-70 px-auto py-[10px] border-t-[1px]">Or with email and password.</p>
                        
                        <EmailErrorContext.Provider value={useState('noError')}>
                            <EmailPasswordLoginForm />
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
    const [emailTypingStart, setEmailTypingStart] = useState(false)
    const [passwordTypingStart, setPasswordTypingStart] = useState(false)
    const [passwordErrorContext, setPasswordErrorContext] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)

    const EmailErrorVisibleClasses = "visible text-[1rem] text-[#F00]"
    const EmailErrorInvisibleClasses = "hidden"
    const InputClasses ="border-2 border-opacity-50 border-white bg-black rounded-[10px] text-[1.4rem]"
    const InputErrorClasses ="border-2 border-opacity-50 border-[#F00] bg-black rounded-[10px] text-[1.4rem]"
    const ButtonUsableClasses = 'cursor-pointer text-[1rem] block my-[20px] border-[1px] border-white py-[15px] px-[30px] rounded-[10px]'
    const ButtonUnusableClasses = 'cursor-[not-allowed] text-[1rem] block my-[20px] border-[1px] opacity-50 border-white py-[15px] px-[30px] rounded-[10px]'    
    
    
    useEffect(() => {
        if (emailTypingStart === true && providedEmail.length === 0) {
            setEmailErrorContext('error')
        } else if (emailTypingStart === true && providedEmail.length > 0) {
            setEmailErrorContext('noError')
        }

        if (passwordTypingStart === true && providedPassword.length === 0) {
            setPasswordErrorContext('error')
        } else if (passwordTypingStart === true && providedPassword.length > 0) {
            setPasswordErrorContext('noError')
        }

        if (emailErrorContext === 'noError' && passwordErrorContext === 'noError' && emailTypingStart === true) {
            setFormSuccess(true)
        } else if (emailErrorContext !== 'noError' || emailTypingStart !== true || passwordErrorContext !== 'noError') {
            setFormSuccess(false)
        }
    }, [emailTypingStart, providedEmail.length, passwordTypingStart, providedPassword.length, emailErrorContext, passwordErrorContext, setEmailErrorContext])

    const handleEmailFormSubmit = (input) => {
        input.preventDefault()
        const LoginDetails = {providedEmail, providedPassword}
        console.log(LoginDetails)
    }
    return (
        <>
        <form noValidate onSubmit={handleEmailFormSubmit}>
            <label className='mt-5 block text-[0.9rem]'>Email Address:</label>
            <input className={(emailErrorContext === 'error' ? InputErrorClasses : InputClasses)} type="text" required value={providedEmail} onChange={(e) => setProvidedEmail(e.target.value) & setEmailTypingStart(true)} />
                <p className={(emailErrorContext === 'error' ? EmailErrorVisibleClasses : EmailErrorInvisibleClasses)}>Input is not valid</p>
            
            <label className='mt-5 block text-[0.9rem]'>Enter password:</label>
            <input className={(passwordErrorContext === 'error' ? InputErrorClasses : InputClasses)} type="password" required value={providedPassword} onChange={(e) => setProvidedPassword(e.target.value) & setPasswordTypingStart(true)} />
                <p className={(passwordErrorContext === 'error' ? EmailErrorVisibleClasses : EmailErrorInvisibleClasses)}>Input is not valid</p>
            
            <button className={(formSuccess === true ? ButtonUsableClasses : ButtonUnusableClasses)}>Log In</button>
        </form>
        </>
    );
}