import React, {FC, useState} from 'react';
import Link from "next/link";
import {postsRef} from "../../data/firebase";
import firebase from "../../data/firebase";

type ProdProps = {
    id: string,
    name: string,
    descr: string,
    num: number
}

const Product: FC<ProdProps> = props => {

    const {id, name, descr, num} = props
    const [hide, setHide] = useState<boolean>(false)



   const offsetRef = firebase.database().ref(".info/serverTimeOffset");
    offsetRef.on("value", function(snap) {
        const offset = snap.val();
        const estimatedServerTimeMs = new Date().getTime() + offset;

        console.log(estimatedServerTimeMs / 1000)
    });


    const removeItem = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const shouldDelete: boolean = confirm(" Are you sure to Delete it ?")

        if (shouldDelete) {
            postsRef.collection('posts').doc(id).delete().then(function () {
                console.log("Document successfully deleted!");
                setHide(true)
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }


    }

    return (
        <>
            {hide ? '' :
                <li style={{
                    height: 400,
                    float: "left",
                    width: "25%",
                    padding: " 39px",
                    backgroundColor: "darkgrey",
                    color: "white",
                    border: "1px solid white"
                }}>

                    <Link  href="/products/[id]" as={`/products/${id}`}> GO TO SEE PRODUCT</Link>
                    <strong
                        style={{
                            height: 30,
                            width: 30,
                            float: "left",
                            backgroundColor: "orange",
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            marginRight: "10px",
                            lineHeight: "30px",
                            borderRadius: "50px",
                            color: "white",
                            border: ".5px solid white"
                        }}
                    >{num}</strong>
                    <h1 style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px"
                    }}>
                        {name}
                    </h1>



                    <p style={{maxWidth: 300}}>{descr}</p>
                    <small style={{color: "blue"}}> ID: {id}</small>

                    <div>
                        <button style={{padding: "14px 28px", backgroundColor: '#bebebe', marginTop: 15,}}
                                onClick={removeItem}> DELETE

                        </button>
                    </div>

                </li>
            }
        </>
    );
};

export default Product;