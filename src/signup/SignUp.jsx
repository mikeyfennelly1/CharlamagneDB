import { Link } from 'react-router-dom';
import { GoogleLogin } from "firebase/auth";
import { FaGoogle, FaGithub } from 'react-icons/fa';

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
                        <h4 className='text-white opacity-80'>Already have an account? <Link className="text-mainPink hover:cursor-pointer" to="/CharlamagneDB/login">Log In</Link></h4>

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
                        <p className="text-[0.7rem] opacity-70 px-auto py-[10px]">Or with email and password.</p>
                        <input className="border-2 border-[#ff6200] bg-black rounded-[10px]" type="text" />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default SignUp;