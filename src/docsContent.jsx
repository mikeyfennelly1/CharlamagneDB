const DocsContent = (props) => {
    const docs = props.docs;

    return (
        <>
                <div className=" border px-[150px] my-[200px] max-w-[1400px]">
                    {docs.map((doc) => (
                        <div key={ doc.id }>
                            <h1 className="mb-[50px] font-[TT-Travels-Next-Med] text-mainPink text-2xl">{ doc.title }</h1>
                            <p className="font-[TT-Autonomous-Mono-Reg] text-white text-xl">{ doc.body }</p>
                        </div>
                    ))}
                </div>
        </>
    );
}
 
export default DocsContent;