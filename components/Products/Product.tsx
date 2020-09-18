import React, {FC, useState} from 'react';

import {postsRef} from "../../data/firebase";

type ProdProps = {
    id: string,
    name: string,
    descr: string,
    num: number
}

const Product: FC<ProdProps> = props => {

    const [hide, setHide] = useState<boolean>(false)


    const removeItem = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
            const shouldDelete :boolean = confirm(" Are you sure to Delete it ?")

        if (shouldDelete) {
            postsRef.collection('posts').doc(id).delete().then(function () {
                console.log("Document successfully deleted!");
                setHide(true)
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }





    }


    const {id, name, descr, num} = props
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
                        <button style={{
                            padding: "14px 28px",
                            backgroundColor: '#bebebe',
                            marginTop: 15,

                        }}
                                onClick={removeItem}
                        > DELETE
                        </button>
                    </div>

                </li>
            }
        </>
    );
};

export default Product;