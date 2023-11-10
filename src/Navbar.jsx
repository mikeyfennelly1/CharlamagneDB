function Navbar() {
    return(
        <>
        <section className="sticky top-0 text-white max-w-screen">
            <div className="flex flex-wrap justify-between w-screen py-5 bg-gradient-to-b from-[#000] bg-opacity-80 absolute z-10">
                <div className="flex items-center w-[200px] justify-start">
                    <h1 className="font-[TT-Travels-Next-Med] text-mainPink ml-[100px]">CharlemagneDB</h1>
                </div>
                <div className="gap-20 bg-[#212121] px-7 h-10 rounded-md hidden pb-0 max-h-10
                                lg:flex lg:items-center">
                    <h3 className="hover:cursor-pointer inline px-7">Products</h3>
                    <h3 className="hover:cursor-pointer inline px-7">Solutions</h3>
                    <h3 className="hover:cursor-pointer inline px-7">Docs</h3>
                </div>
                <div className="items-center w-[200px] justify-end hidden self-center
                                lg:block">
                    <button className=" px-7 rounded-full hover:bg-white hover:text-black">Sign In</button>
                </div>
                <div className="flex justify-end items-center min-w-[200px]
                                lg:hidden">
                </div>
            </div>
        </section>
        </>
    );
}

export default Navbar;