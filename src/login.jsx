const Login = () => {
    return (
        <>
            <div className="bg-[#0F0F0F] min-h-screen">
                <img className="absolute top-0" src="../images/loginCircles.png" alt="" />
                <div className="inline-block min-h-screen min-w-[500px] bg-black border-opacity-50">
                    <div className="text-white font-[Inter-Reg] text-[1.6rem] mt-[100px] px-[50px]">
                        <h1 className="font-[Inter-Bold]">Log in to your account</h1>
                        <h2>Don't have an account? <a className="text-mainPink" href="signup">Sign Up</a></h2>
                        <button className="cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white min-w-[100%] py-[10px] rounded-[10px]">
                            Google
                        </button>
                        <button className="cursor-pointer text-[1rem] block my-[20px] border-[1px] border-opacity-50 border-white min-w-[100%] py-[10px] rounded-[10px]">
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