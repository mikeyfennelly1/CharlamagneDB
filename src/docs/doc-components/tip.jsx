const Tip = (props) => {
    const tip = props.tip
    return (
        <>
            <div className="text-[1rem] my-[50px] border-l-8 border-white">
                <h2 className="py-[20px] pl-[50px] bg-[#111] text-white">TIP:</h2>
                <p className="pl-[50px] my-0 pb-[5px]">{tip}</p>
            </div>
        </>
    );
}
 
export default Tip;