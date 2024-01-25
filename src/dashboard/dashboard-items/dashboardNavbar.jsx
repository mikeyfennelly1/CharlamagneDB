import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase'

const DashboardNavbar = () => {
    const [user] = useAuthState(auth)

    return (
        <>
        <section className=" md:block text-white max-h-[100px]">
            <div className="flex flex-wrap justify-between max-w-[100vw] w-[99vw] bg-black min-h-[100px] text-[1.3rem] max-h-[100px]">
                
                <div className="mx-auto flex items-center w-[400px] justify-start ml-[100px] max-h-[100px]">
                    <Link to="/CharlamagneDB/" className="font-[TT-Travels-Next-Med] cursor-pointer text-mainPink">{user.displayName}'s CDB Dashboard</Link>
                </div>

                {!user && (
                <div className="ml-auto items-center w-[200px] justify-end hidden self-center font-[TT-Autonomous-Mono-Reg]
                                lg:block">
                    <Link to="/CharlamagneDB/login" className=" px-7 rounded-full hover:text-mainPink">Log In</Link>
                </div>
                )}

                {user && (
                    <div className="ml-auto w-[350px] items-center hidden font-[TT-Autonomous-Mono-Reg] max-h-[100px]
                    lg:flex">
                    <Link to="/CharlamagneDB/help">
                        <h2 className='my-0 inline-block text-[1.1rem] pr-[20px] text-white font-thin'>Get Help</h2>
                        </Link>
                    <Link to="/CharlamagneDB/dashboard">
                        <h2 className='my-0 inline-block text-[1.1rem] pr-4 font-semibold'>{user.displayName}</h2>
                        <img className='max-h-[20px] inline rounded-full ' src={user.photoURL}
                        alt="" />
                    </Link>
                </div>
                )}
            </div>
        </section>
        </>
    );
}
 
export default DashboardNavbar;