import React, { useState } from 'react';
import '../Css/Add.css'; // Import your updated CSS file for styling
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Add() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const productDetails = { title, description, price, stock, category, image };
            const res = axios.post(`${import.meta.env.VITE_URL}/api/product/add`, productDetails, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('sgauthtoken')}`
                }
            });
            toast.success((await res).data.message);
            navigate('/profile');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="add-product-container-unique">
            <h1>Fill Product Details</h1>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className="form-group-unique">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group-unique">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group-unique">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group-unique">
                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group-unique">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group-unique">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button-unique">Add Product</button>
            </form>
        </div>
    );
}

export default Add;
