function Navbar() {
    return(
        <>
        <div className="flex flex-wrap justify-around mx-auto mt-7 text-white max-w-[1500px] min-w-1500px ">
            <h1 className="">CharlemagneDB</h1>
                <div className="flex gap-20 bg-[#212121] px-7 py-2 rounded-md">
                    <h3 className="">Products</h3>
                    <h3 className="">Solutions</h3>
                    <h3 className="">Docs</h3>
                </div>
            <button className="">Sign In</button>
        </div>
        </>
    );
}

export default Navbar;