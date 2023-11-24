function Navbar() {
    return(
        <>
        <section className=" md:block z-100 absolute top-0 text-white">
            <div className="z-9999 absolute flex flex-wrap justify-between max-w-[100vw] w-[99vw] py-5 bg-black grid grid-cols-3">
                <div className="mx-auto flex items-center w-[200px] justify-start ml-[100px]">
                    <img className="max-h-[30px]" src="./images/Vector 88.png" alt="" />
                    <a href='/' className="font-[TT-Travels-Next-Med] cursor-pointer text-mainPink ml-[10px]">CharlemagneDB</a>
                </div>
                <div className="mx-auto gap-20 bg-[#212121] px-7 h-10 rounded-md hidden pb-0 max-h-10 max-w-fit
                                lg:flex lg:items-center">
                    <a href='/loco' className="hover:cursor-pointer inline px-7">Loco</a>
                    <a href="/pricing" className="hover:cursor-pointer inline px-7">Pricing</a>
                    <a href="/docs" className="hover:cursor-pointer inline px-7">Docs</a>
                </div>
                <div className="ml-auto items-center w-[200px] justify-end hidden self-center
                                lg:block">
                    <a href="/login" className=" px-7 rounded-full">Log In</a>
                </div>
                {/* <div className="flex justify-end items-center min-w-[200px]
                                lg:hidden">
                </div> */}
            </div>
        </section>
        </>
    );
}

export default Navbar;