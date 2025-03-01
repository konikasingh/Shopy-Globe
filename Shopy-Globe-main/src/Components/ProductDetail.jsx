import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Css/ProductDetail.css'; // Add this for custom styles
import { additem, removeitem } from '../Utils/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';

function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams(); // Gets the product ID from URL params
    const [product, setProduct] = useState(null); // To store product details

    async function fetchData() {
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/product/products/${id}`);
        setProduct(res.data.product); // Set the fetched product data
    }

    let cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    function addtocart(id) {
        dispatch(additem(id)); // Adds product to cart
    }

    useEffect(() => {
        fetchData(); // Fetches the product when the component loads
    }, [id]);

    if (!product) return <Loading />; // Shows loading if product data isn't fetched yet

    return (
        <div className="product-detail-container">
            <button onClick={() => navigate(-1)} className='bg-black text-white p-2 rounded-lg m-0 w-fit'>
                <i className="ri-arrow-left-line"></i> Back
            </button>

            <div className="product-detail-card">
                <img className="product-detail-image" src={product.image} alt={product.title} /> {/* Updated to product.image */}

                <div className="product-detail-info">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">
                        Price: ${product.price.toFixed(2)}
                    </p>
                    <p className="product-category">Category: {product.category}</p>
                    <p className="product-stock">Stock: {product.stock}</p> {/* Show stock */}

                    <div className="product-specs">
                        <p><strong>Owner ID:</strong> {product.owner}</p> {/* Display the owner ID */}
                        {/* Other product details (e.g., weight, dimensions) can be displayed if needed */}
                    </div>

                    {!cart.includes(product._id) ? ( /* Changed from product.id to product._id */
                        <button className='viewbtn bg-black text-white p-3 rounded-lg mt-3' onClick={() => addtocart(product._id)}>
                            Add <i className="ri-shopping-cart-line"></i>
                        </button>
                    ) : (
                        <button className='viewbtn bg-black text-white p-3 rounded-lg mt-3' onClick={() => navigate('/cart')}>
                            View in cart <i className="ri-arrow-right-line"></i>
                        </button>
                    )}
                </div>
            </div>

            <div className="product-reviews">
                <h2>Customer Reviews</h2>
                {product.reviews?.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <p><strong>{review.reviewerName}</strong> ({review.rating} ⭐)</p>
                            <p>{review.comment}</p>
                            <p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;
