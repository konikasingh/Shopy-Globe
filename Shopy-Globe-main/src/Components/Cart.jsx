import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { additem, removeitem } from '../Utils/cartSlice';
import axios from 'axios';
import CartProduct from './CartProduct';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    let cart = useSelector((state) => state.cart.value); // Get the items in the cart from Redux store
    const dispatch = useDispatch();

    // Fetch the product data from the API
    async function fetchData() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_URL}/api/product/products`);
            setProducts(res.data.products); // Assuming the API returns products in `res.data.products`
        } catch (error) {
            alert('Error in Fetching data'); // Basic error handling
        }
    }

    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, []);

    return (
        <div>
            <button onClick={() => navigate(-1)} className='bg-black text-white p-2 rounded-lg ml-3 mt-3 w-fit'>
                <i className="ri-arrow-left-line"></i> Back
            </button>

            <h1 className='w-full text-center m-4'>Total items {cart.length}</h1>

            {/* Check if the cart has items and products are loaded */}
            {cart.length > 0 && products ? (
                <div className='w-full flex flex-col gap-5 p-3'>
                    {/* Filter the products to only those in the cart and display them */}
                    {products
                        .filter((product) => cart.includes(product._id)) // Changed to use `_id` instead of `id`
                        .map((product) => {
                            return <CartProduct key={product._id} product={product} />; // Use product._id for keys
                        })}
                </div>
            ) : (
                <div className='w-full flex flex-col items-center gap-4 mt-6'>
                    <h1 className='text-red-500 text-3xl'>Your cart is empty</h1>
                    <img
                        className='w-1/2'
                        src="https://i.pinimg.com/564x/bc/bd/99/bcbd99c43aea08b85d3c3a6b80a47b56.jpg"
                        alt="Empty cart illustration"
                    />
                    <button className='bg-black p-2 rounded-xl text-white' onClick={() => navigate('/')}>
                        SHOP NOW
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
