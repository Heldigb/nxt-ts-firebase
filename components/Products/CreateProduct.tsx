import React, {FC, useState} from 'react';

import {postsRef} from "../../data/firebase";
import firebase from "../../data/firebase";

const CreateProduct: FC = () => {

    // const [value, setValue] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')


    const createTodo = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const item = {
            name: name,
            descr: description,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        postsRef.collection('posts').add(item);
        setName("");
        setDescription("");
        console.log(item)
    };


    return (
        <div>
            <form
                onSubmit={createTodo}
                style={{
                    border: "1px solid white",
                    display: "inline-flex",
                    flexDirection: "column",
                    padding: 18,
                    background: "lightGray",
                    height: 300,
                    justifyContent: "space-between"
                }}
            >

                <input
                    style={{border: "1px solid gray", padding: 18,}}
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Write a name"
                />

                <textarea
                    style={{border: "1px solid gray", padding: 18,}}
                    id="descr"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write Description"
                />

                <button type="submit"> Submit</button>

            </form>

        </div>
    );
}


export default CreateProduct;