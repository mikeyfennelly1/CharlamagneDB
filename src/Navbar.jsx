function Navbar() {
    return(
        <>
        <section className="fixed top-0 ml-[calc(50vw-750px)] text-white py-5">
            <div className="flex flex-wrap justify-between w-screen
                            xl:min-w-[1200px] xl:max-w-[1200px]
                            2xl:min-w-[1500px] 2xl:max-w-[1500px]
                            ">
                <div className="flex items-center w-[200px] justify-start">
                    <h1 className="font-[TT-Travels-Next-Med] text-mainPink">CharlemagneDB</h1>
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
                    <h1>BM</h1>
                </div>
            </div>
        </section>
        </>
    );
}

export default Navbar;