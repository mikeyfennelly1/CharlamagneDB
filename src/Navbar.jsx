import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase'

function Navbar() {

    const [user, loading] = useAuthState(auth)

    return(
        <>
        <section className=" md:block z-1000 absolute top-0 text-white">
            <div className="absolute flex flex-wrap justify-between max-w-[100vw] w-[99vw] py-5 bg-black grid grid-cols-3">
                <div className="mx-auto flex items-center w-[200px] justify-start ml-[100px]">
                    <img className="max-h-[30px]" src="./images/Vector 88.png" alt="" />
                    <Link to="/CharlamagneDB/" className="font-[TT-Travels-Next-Med] cursor-pointer text-mainPink ml-[10px]">CharlemagneDB</Link>
                </div>
                <div className="mx-auto gap-20 bg-[#212121] px-7 h-10 rounded-md hidden pb-0 max-h-10 max-w-fit font-[TT-Autonomous-Mono-Reg]
                                lg:flex lg:items-center">
                    <Link to="/CharlamagneDB/loco" className="hover:cursor-pointer inline px-7 hover:text-mainPink">Loco</Link>
                    <Link to="/CharlamagneDB/pricing" className="hover:cursor-pointer inline px-7 hover:text-mainPink">Pricing</Link>
                    <Link to="/CharlamagneDB/docs" className="hover:cursor-pointer inline px-7 hover:text-mainPink">Docs</Link>
                </div>
                {!user && (
                <div className="ml-auto items-center w-[200px] justify-end hidden self-center font-[TT-Autonomous-Mono-Reg]
                                lg:block">
                    <Link to="/CharlamagneDB/login" className=" px-7 rounded-full hover:text-mainPink">Log In</Link>
                </div>
                )}
                {user && (
                <div className="ml-auto items-center w-[200px] justify-end hidden self-center font-[TT-Autonomous-Mono-Reg]
                    lg:block">
                    <Link to="/CharlamagneDB/dashboard" className=" px-7 rounded-full hover:text-mainPink max-h-[10px]">
                        <h2 className='inline pr-4 text-mainPink font-semibold'>{user.displayName}</h2>
                        <img className='max-h-[20px] inline rounded-full' src={user.photoURL}
                        alt="" />
                    </Link>
                </div>
                )}
            </div>
        </section>
        </>
    );
}

export default Navbar;