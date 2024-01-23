import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase'

const DashboardNavbar = () => {
    const [user] = useAuthState(auth)

    return (
        <>
        <section className=" md:block text-white">
            <div className="flex flex-wrap justify-between max-w-[100vw] w-[99vw] py-5 bg-black min-h-[100px] text-[1.3rem]">
                <div className="mx-auto flex items-center w-[400px] justify-start ml-[100px]">
                    <img className="max-h-[30px]" src="./images/Vector 88.png" alt="" />
                    <Link to="/CharlamagneDB/" className="font-[TT-Travels-Next-Med] cursor-pointer text-mainPink">{user.displayName}'s CDB Dashboard</Link>
                </div>
                {!user && (
                <div className="ml-auto items-center w-[200px] justify-end hidden self-center font-[TT-Autonomous-Mono-Reg]
                                lg:block">
                    <Link to="/CharlamagneDB/login" className=" px-7 rounded-full hover:text-mainPink">Log In</Link>
                </div>
                )}
                {user && (
                    <div className="ml-auto items-center w-[350px] justify-end hidden self-center font-[TT-Autonomous-Mono-Reg] text-[1.1rem]
                    lg:block">
                    <Link to="/CharlamagneDB/help"><h2 className='inline-block'>Get Help</h2></Link>
                    <Link to="/CharlamagneDB/dashboard" className=" px-7 rounded-full hover:text-mainPink max-h-[10px]">
                        <h2 className='inline-block pr-4 text-mainPink font-semibold'>{user.displayName}</h2>
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
 
export default DashboardNavbar;