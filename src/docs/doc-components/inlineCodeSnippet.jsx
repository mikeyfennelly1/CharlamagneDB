const InlineCodeSnippet = (props) => {
    const code = props.code
    return (
        <>
            <span className="bg-[#222] rounded-[5px] px-2 font-[SourceCodePro-Variable] opacity-80">{ code }</span>
        </>
    );
}
 
export default InlineCodeSnippet;