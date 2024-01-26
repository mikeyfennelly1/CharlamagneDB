import { Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

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

    //Sign in with Google
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
                <img className="absolute top-0 pointer-events-none" src="../images/loginCircles.png" alt="" />
                <div className="inline-block min-h-screen min-w-[500px] bg-black border-opacity-50">
                    <div className="text-white font-[Inter-Reg] text-[1.6rem] mt-[100px] px-[50px]">
                    
                    <div className="mb-[50px] cursor-pointer">
                        <img className="inline max-h-[30px]" src="./images/Vector 88.png" alt="" />
                        <a href='/' className="font-[TT-Travels-Next-Med] text-[1rem] text-mainPink ml-[10px]">CharlemagneDB</a>
                    </div>
                        <h1 className="font-[Inter-Bold]">Log in to your account</h1>
                        <h2>Don't have an account? <Link className="text-mainPink" to="/CharlamagneDB/signup">Sign Up</Link></h2>
                        <button 
                        onClick={GoogleLogin}
                        className="cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white min-w-[100%] py-[10px] rounded-[10px]">
                            Google
                        </button>
                        <button 
                        onClick={GithubLogin}
                        className="cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white min-w-[100%] py-[10px] rounded-[10px]">
                            GitHub
                        </button>
                        <p className="text-[0.7rem] opacity-70 px-auto py-[10px]">Or with email and password.</p>
                        <input className="border-2 border-[#ff6200] bg-black rounded-[10px]" type="text" />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Login;