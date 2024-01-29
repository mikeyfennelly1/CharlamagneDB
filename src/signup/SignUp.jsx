import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useState, useContext, useEffect, createContext } from 'react';
import { CreateUserEmailPassword } from '../firebase/firebaseAuth'
import { constructUrl } from '../utils/urlutils'

const SignUp = () => {
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
                        <h1 className="font-[Inter-Bold]">Sign up for a CharlemagneDB account</h1>
                        <h4 className='text-white opacity-80'>Already have an account? <Link className="text-mainPink hover:cursor-pointer" to={constructUrl("/login")}>Log In</Link></h4>

                        <button 
                        className="cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white min-w-[100%] py-[15px] rounded-[10px]">
                            <FaGoogle className='inline scale-[1.5] mr-[20px]'/>
                            Google
                        </button>
                        <button 
                        
                        className="cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white min-w-[100%] py-[15px] rounded-[10px]">
                            <FaGithub className='inline scale-[1.5] mr-[20px]'/>
                            GitHub
                        </button>

                        <p className="text-[0.7rem] opacity-70 px-auto py-[10px] border-t-[1px]">Or with email and password.</p>
                        
                        <EmailErrorContext.Provider value={useState('noError')}>
                            <EmailPasswordSignUpForm />
                        </EmailErrorContext.Provider>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default SignUp;

const EmailErrorContext = createContext(null)

const EmailPasswordSignUpForm = () => {
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

        if (passwordTypingStart === true && providedPassword.length < 8) {
            setPasswordErrorContext('error')
        } else if (passwordTypingStart === true && providedPassword.length > 8) {
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
        
        if (formSuccess === true) {
            const SignUpDetails = {providedEmail, providedPassword}
            CreateUserEmailPassword(SignUpDetails)
        }
    }
    return (
        <>
        <form formNoValidate onSubmit={handleEmailFormSubmit}>
            <label className='mt-5 block text-[0.9rem]'>Email Address:</label>
            <input name="emailAddress" className={(emailErrorContext === 'error' ? InputErrorClasses : InputClasses)} type="text" value={providedEmail} onChange={(e) => setProvidedEmail(e.target.value) & setEmailTypingStart(true)} required/>
                <p className={(emailErrorContext === 'error' ? EmailErrorVisibleClasses : EmailErrorInvisibleClasses)}>Input is not valid</p>
            
            <label className='mt-5 block text-[0.9rem]'>Create a password:</label>
            <input name="password" className={(passwordErrorContext === 'error' ? InputErrorClasses : InputClasses)} type="password" required value={providedPassword} onChange={(e) => setProvidedPassword(e.target.value) & setPasswordTypingStart(true)} />
                <p className={(passwordErrorContext === 'error' ? EmailErrorVisibleClasses : EmailErrorInvisibleClasses)}>Password must be longer than 8 characters</p>
            
            <button className={(formSuccess === true ? ButtonUsableClasses : ButtonUnusableClasses)}>Create Account</button>
        </form>
        </>
    );
}