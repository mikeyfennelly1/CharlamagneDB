import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseAuth'
import { constructImgURL, constructUrl } from '../../utils/urlutils';
import { SignOutUser } from '../../firebase/firebaseAuth';

const DashboardNavbar = () => {
    const [user] = useAuthState(auth)

    return (
        <>
        <section  className=" md:block text-white max-h-[100px]">
            <div className="flex flex-wrap justify-between max-w-[100vw] w-[99vw] bg-black min-h-[100px] text-[1.3rem] max-h-[100px]">
                    <div className="mx-auto flex items-center w-fit justify-start ml-[100px] max-h-[100px]">
                        <img className="max-h-[30px] mr-[10px]" src={constructImgURL("./images/Vector 88.png")} alt="" />
                        <Link to={constructUrl("/")} className="font-[TT-Travels-Next-Med] cursor-pointer text-mainPink">{user.displayName}'s CDB Dashboard</Link>
                    </div>

                {!user && (
                <div className="ml-auto items-center w-fit justify-end hidden self-center font-[TT-Autonomous-Mono-Reg]
                                lg:block">
                    <Link to={constructUrl("/login")} className=" px-7 rounded-full hover:text-mainPink">Log In</Link>
                </div>
                )}

                {user && (
                    <div className="ml-auto w-fit items-center hidden font-[TT-Autonomous-Mono-Reg] max-h-[100px]
                    lg:flex">
                    <Link to={constructUrl("/help")}>
                        <h2 className='my-0 inline-block text-[1.1rem] mx-[30px] text-white font-thin'>Get Help</h2>
                    </Link>
                    <Link to={constructUrl('')}>
                        <button className='hover:bg-black hover:text-mainPink border border-mainPink my-0 inline-block text-[1.1rem] py-[10px] mx-[30px] rounded-[5px] px-[20px] text-black font-thin bg-mainPink' onClick={SignOutUser}>Sign Out</button>
                    </Link>
                    <Link className="mx-[30px]" to={constructUrl("/dashboard")}>
                        <h2 className='my-0 inline-block text-[1.1rem]  font-semibold mr-[10px]'>{user.displayName}</h2>
                        <img className='max-h-[30px] inline rounded-full border-2 border-mainPink' src={user.photoURL}
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