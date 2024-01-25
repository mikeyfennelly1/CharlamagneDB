const CodeSnippet = (props) => {
    const code = props.code
    return (
        <>
        <div className="border border-mainPink bg-[#222] rounded-[10px] max-w-[800px] px-[40px] py-[10px] my-[30px]">
            <p className="p-0 font-[SourceCodePro-Variable] opacity-80">{ code }</p>
        </div>
        </>
    );
}
 
export default CodeSnippet;