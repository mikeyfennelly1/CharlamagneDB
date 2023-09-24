function Navbar() {
    return(
        <>
        <div className="fixed flex flex-wrap top-[0%] translate-x-[calc(50vw-389px)] translate-y-[50%] mt-7 text-white max-w-[1500px] min-w-1500px z-100">
            <div className="flex items-center w-[200px] justify-start">
                <h1 className="font-[TT-Travels-Next-Med] text-mainPink">CharlemagneDB</h1>
            </div>
            <div className="flex gap-20 bg-[#212121] px-7 py-2 rounded-md">
                <h3 className="hover:cursor-pointer">Products</h3>
                <h3 className="hover:cursor-pointer">Solutions</h3>
                <h3 className="hover:cursor-pointer">Docs</h3>
            </div>
            <div className="flex items-center w-[200px] justify-end">
                <button className="border-2 px-7 rounded-full hover:bg-white hover:text-black">Sign In</button>
            </div>
        </div>
        </>
    );
}

export default Navbar;