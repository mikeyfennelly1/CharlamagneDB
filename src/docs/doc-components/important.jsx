const Important = (props) => {
    const message = props.message
    return (
        <>
            <div className="text-[1rem] my-[50px] border-l-8 border-[#ebbd34]">
                <h2 className="py-[20px] pl-[50px] bg-[#111] text-[#ebbd34]">Important:</h2>
                <p className="pl-[50px] my-0 pb-[5px]">{message}</p>
            </div>
        </>
    );
}
 
export default Important;