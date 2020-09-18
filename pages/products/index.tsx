import React, {useState, useEffect, FC} from 'react';
import {postsRef} from "../../data/firebase";
import Product from "../../components/Products/Product";
import CreateProduct from "../../components/Products/CreateProduct";
import Layout from '../../components/Layout'


interface ProductTS {
    id: string;
    name: string;
    descr: string;

}
const Index: FC = () => {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await postsRef.collection("posts").get()
            setProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        fetchData();
    }, []);
    return (
        <Layout>
            <CreateProduct/>
            <ul style={{width: "100%", listStyle: "none"}}>
                {
                    products && products.map((product: ProductTS,index: number) => (
                            <Product
                                key={index}
                                id={product.id}
                                num={index}
                                name={product.name}
                                descr={product.descr}

                            />

                        )
                    )
                }
            </ul>
        </Layout>
    );
};

export default Index;