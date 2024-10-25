function Navbar(){
    return(
        <>
        <div className="text-white flex justify-around gap-10 items-center mt-7 border-b  shadow-white pb-7 ">
            <h1 className="text-3xl font-black">Moviezz App</h1>
            <div className="flex justify-center items-center gap-10 text-lg">
                <h1>Home</h1>
                <h1>About us</h1>
                <h1>Contact us</h1>
            </div>
            <button className="border px-5 py-2 rounded border-x-neutral-400">Sign up</button>
        </div>
        </>
    )
}
export default Navbar;



