import { useState } from "react";

const DocsSidebar = () => {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim dignissimos facilis saepe laborum perferendis id minima ad, officiis, itaque nostrum alias illo optio repellendus eius quia cupiditate quasi adipisci. Laboriosam, laborum qui nisi, magnam voluptates soluta vitae nesciunt dolorum blanditiis minima voluptatem asperiores error, cumque explicabo beatae! Deleniti dicta iure eligendi harum odio sapiente molestiae sit provident minima atque. Iure veritatis nisi explicabo officiis commodi pariatur quidem provident! Laborum, odio quasi ratione incidunt suscipit et quaerat hic sunt earum qui ullam consequatur officia nobis voluptates, eveniet, exercitationem quos deleniti. Molestias similique quam consectetur aperiam aliquid iure earum et commodi unde eligendi mollitia ut ipsum, fuga obcaecati ipsa? Culpa at quos reiciendis consectetur odio ad enim facilis cumque nemo voluptatibus."

    // Information for the docs
    const [docs, setDocs] = useState([
        { title: 'Create an account', body: lorem, id: 1 },
        { title: 'Deploy a free cluster', body: lorem, id: 2 },
        { title: 'Manage the IP access List', body: lorem, id: 3 },
        { title: 'Create a Database User', body: lorem, id: 4 },
        { title: 'Connect to the cluster', body: lorem, id: 5 },
        { title: 'Insert and view a document', body: lorem, id: 6 },
    ])

    // some way to construct the sidebar button for each doc

    // some way to construct the actual document

    // All while linking them together

    return (
        <>
            <section className="grid grid-cols-2 text-white font-[TT-Autonomous-Mono-Reg]">
                <div className="text-white  min-h-screen max-w-[500px] font-[TT-Autonomous-Mono-Reg] mt-[100px] bg-[#121212] pl-[50px] pt-[50px]">
                    <div>
                        <h2 className="font-[TT-Travels-Next-Med] text-mainPink text-lg">CharlemagneDB Documentation</h2>
                        <h2 className="text-white  text-lg mt-[20px]">CharlemagneDB Loco</h2>
                    </div>
                    <div>
                        {docs.map((doc) => (
                            <div key={ doc.id }>
                                <h2> { doc.title }</h2>
                            </div>
                        ))}

                    </div>
                </div>
                <div>
                    {docs.map((doc) => (
                        <div key={ doc.id }>
                            <h2 className="font-[TT-Travels-Next-Med] text-mainPink text-2xl"> { doc.title }</h2>
                            <p>{ doc.body }</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
 
export default DocsSidebar;