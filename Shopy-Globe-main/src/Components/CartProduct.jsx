import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeitem } from '../Utils/cartSlice';
import '../Css/CartProduct.css';

function CartProduct({ product }) {
    const dispatch = useDispatch();

    // Function to remove item from cart
    function handleRemoveFromCart(id) {
        dispatch(removeitem(id));
    }

    return (
        <div className='card-horizontal'>
            {/* Product image */}
            <img className='product-image' src={product.image} alt={product.title} />

            <div className='card-content'>
                <Link
                    to={`/show/${product._id}`} // Using product._id from your data structure
                    onClick={() => window.scrollBy({ top: -5000, behavior: 'smooth' })}
                    className="top-horizontal"
                >
                    <p className="text-gray-700">{product.title}</p>
                </Link>
                <div className="bottom-horizontal">
                    <div className="left-horizontal">
                        <p>{product.category}</p>
                        <p>Price: ₹{product.price}</p>  {/* Updated price format for INR */}
                        <p>Stock: {product.stock}</p>    {/* Added stock info */}
                    </div>
                    <button className='removebtn' onClick={() => handleRemoveFromCart(product._id)}>
                        Remove <i className="ri-shopping-cart-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
