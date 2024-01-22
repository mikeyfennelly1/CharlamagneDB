import DocsContent from "./docsContent";
import DocsSidebar from "./docsSidebar";
import { useState } from "react";


const DocsPage1 = () => {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim dignissimos facilis saepe laborum perferendis id minima ad, officiis, itaque nostrum alias illo optio repellendus eius quia cupiditate quasi adipisci. Laboriosam, laborum qui nisi, magnam voluptates soluta vitae nesciunt dolorum blanditiis minima voluptatem asperiores error, cumque explicabo beatae! Deleniti dicta iure eligendi harum odio sapiente molestiae sit provident minima atque. Iure veritatis nisi explicabo officiis commodi pariatur quidem provident! Laborum, odio quasi ratione incidunt suscipit et quaerat hic sunt earum qui ullam consequatur officia nobis voluptates, eveniet, exercitationem quos deleniti. Molestias similique quam consectetur aperiam aliquid iure earum et commodi unde eligendi mollitia ut ipsum, fuga obcaecati ipsa? Culpa at quos reiciendis consectetur odio ad enim facilis cumque nemo voluptatibus."

    const [docs, setDocs] = useState([
        { title: 'Create an account', body: lorem, id: 1 },
        { title: 'Deploy a free cluster', body: lorem, id: 2 },
        { title: 'Manage the IP access List', body: lorem, id: 3 },
        { title: 'Create a Database User', body: lorem, id: 4 },
        { title: 'Connect to the cluster', body: lorem, id: 5 },
        { title: 'Insert and view a document', body: lorem, id: 6 },
    ])

    // const [activeDocID, setActiveDocID] = useState(1)

    return (
        <>
            <div className="min-h-screen flex flex-cols-2">
                <div className="inline min-w-[500px]">
                    <DocsSidebar docs={docs} />
                </div>
                <div className="inline">
                    <DocsContent docs={docs} />
                </div>
            </div>
        </>
    );
}
 
export default DocsPage1;