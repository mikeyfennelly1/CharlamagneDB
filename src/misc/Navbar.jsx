import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebaseAuth'
import { constructUrl } from '../utils/urlutils';

function Navbar() {
    const [user] = useAuthState(auth)

    return(
        <>
        <section className=" md:block z-1000 absolute top-0 text-white pt-[10px]">
            <div className="absolute flex items-center py-[10px] justify-between max-w-[100vw] w-[99vw] bg-black grid grid-cols-3  ">
                {/* COLUMN ONE */}
                <div className=''>
                    <div className="ml-[100px] flex items-center w-[200px] justify-start ">
                        <img className="max-h-[30px]" src={constructUrl("./images/Vector 88.png")} alt="" />
                        <Link to={constructUrl("/")} className="font-[TT-Travels-Next-Med] cursor-pointer text-mainPink text-[1.1rem] pl-[10px]">CharlemagneDB</Link>
                    </div>
                </div>
                {/* COLUMN TWO */}
                <div className=''>
                    <div className="mx-auto gap-20 bg-[#212121] rounded-md hidden h-[50px] max-w-fit font-[TT-Autonomous-Mono-Reg]  min-w-[00px] px-[50px]
                                    lg:flex lg:items-center">
                        <Link to={constructUrl("/loco")} className="hover:cursor-pointer inline hover:text-mainPink mx-auto ">Loco</Link>
                        <Link to={constructUrl("/pricing")} className="hover:cursor-pointer inline hover:text-mainPink mx-auto ">Pricing</Link>
                        <Link to={constructUrl("/docs")} className="hover:cursor-pointer inline hover:text-mainPink mx-auto ">Docs</Link>
                    </div>
                </div>
                    {!user && (
                        <div className=''>
                            <div className="ml-auto mr-[100px] gap-20 border rounded-md hidden h-[50px] max-w-fit font-[TT-Autonomous-Mono-Reg]  min-w-[00px] px-[50px]
                                lg:flex lg:items-center hover:cursor-pointer hover:bg-mainPink hover:text-black border border-mainPink ">
                                <Link to={constructUrl("/login")} className="rounded-full">Log In</Link>
                            </div>
                        </div>
                    
                    )}
                {/* COLUMN THREE */}
                {user && (
                    <div className=''>
                        <div className="mr-[100px] max-w-fit rounded-md-0 font-[TT-Autonomous-Mono-Reg]  ml-auto
                            lg:block">
                            <Link to={constructUrl("/dashboard")}>
                                <button className='hover:bg-mainPink hover:text-black border border-mainPink inline-block rounded-[5px] text-mainPink font-thin bg-black h-[50px] mr-[30px] px-[20px]'>Go to dashboard</button>
                            </Link>
                            <Link className="h-[50px]" to={constructUrl("/dashboard")}>
                                <h2 className='inline-block text-[1rem] my-0 font-semibold mr-[10px]'>{user.displayName}</h2>
                                <img className='max-h-[30px] inline rounded-full border-2 border-mainPink' src={user.photoURL}
                                alt="" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
        </>
    );
}

export default Navbar;