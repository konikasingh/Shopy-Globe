import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

import Loading from './Loading';
function ProductList() {
    const [products, setProducts] = useState(null);
    async function fetchData() {
        try {                                                             //Error Handling
            const res = await axios.get(`${import.meta.env.VITE_URL}/api/product/products`);
            setProducts(res.data.products)
        } catch (error) {
            alert('Error in Fetching data')
        }

    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            {products ? <div className='w-full flex flex-wrap justify-evenly gap-4 items-center'>
                {products.map((product) => {
                    return <ProductCard key={product._id} product={product}></ProductCard>
                })}
            </div> : <Loading />}
        </>
    )
}

export default ProductList
