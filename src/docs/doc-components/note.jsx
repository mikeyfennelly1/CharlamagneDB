const Note = (props) => {
    const message = props.message
    return (
        <>
            <div className="text-[1rem] max-w-fit my-[50px] border-l-8 border-mainPink ">
                <h2 className="py-[20px] pl-[50px] pr-[100px] bg-[#111]">NOTE:</h2>
                <p className="pl-[50px] pr-[100px] py-[20px]">{message}</p>
            </div>
        </>
    );
}
 
export default Note;
