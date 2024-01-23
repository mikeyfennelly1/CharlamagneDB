import React from 'react'
import { createContext, useState, useContext } from "react";
import DocsContent from "./docsContent";
import DocsSidebar from "./docsSidebar";

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim dignissimos facilis saepe laborum perferendis id minima ad, officiis, itaque nostrum alias illo optio repellendus eius quia cupiditate quasi adipisci. Laboriosam, laborum qui nisi, magnam voluptates soluta vitae nesciunt dolorum blanditiis minima voluptatem asperiores error, cumque explicabo beatae! Deleniti dicta iure eligendi harum odio sapiente molestiae sit provident minima atque. Iure veritatis nisi explicabo officiis commodi pariatur quidem provident! Laborum, odio quasi ratione incidunt suscipit et quaerat hic sunt earum qui ullam consequatur officia nobis voluptates, eveniet, exercitationem quos deleniti. Molestias similique quam consectetur aperiam aliquid iure earum et commodi unde eligendi mollitia ut ipsum, fuga obcaecati ipsa? Culpa at quos reiciendis consectetur odio ad enim facilis cumque nemo voluptatibus."

const docs = [
    { title: 'Create an account', body: lorem, id: 1 },
    { title: 'Deploy a free cluster', body: lorem, id: 2 },
    { title: 'Manage the IP access List', body: lorem, id: 3 },
    { title: 'Create a Database User', body: lorem, id: 4 },
    { title: 'Connect to the cluster', body: lorem, id: 5 },
    { title: 'Insert and view a document', body: lorem, id: 6 },
];

const AddOneButton = () => {
    const [, setCounter] = useContext(0)
    return (
    <div>
        <button onClick={() => setCounter((v) => v + 1)} style={{color: "white", position: "absolute", top: "500px"}}>Add One</button>
    </div>
)}

const Counter = () => {
    const [counter] = useContext(0)
    return (
    <div style={{color: "white", position: "absolute", top: "600px"}}>Counter: {counter}</div>
    )
}

const DocsPage1 = () => {
    return (
        <>
            <div className="min-h-screen flex flex-cols-2">
                    <AddOneButton />
                    <Counter />
                    {/* <DocsSidebar docs={docs} /> */}
                <div className="inline">
                    {/* <DocsContent docs={docs} /> */}
                </div>
            </div>
        </>
    );
}
 
export default DocsPage1;