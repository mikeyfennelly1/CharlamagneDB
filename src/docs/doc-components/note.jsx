const Note = (props) => {
    const message = props.message
    return (
        <>
            <div className="text-[1rem] my-[50px] border-l-8 border-mainPink">
                <h2 className="py-[20px] pl-[50px] bg-[#111]">NOTE:</h2>
                <p className="pl-[50px] py-[20px]">{message}</p>
            </div>
        </>
    );
}
 
export default Note;
