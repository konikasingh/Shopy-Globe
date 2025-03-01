import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function Search() {
    const [products, setProducts] = useState(null);
    const [fproducts, setFproducts] = useState(null);
    const [filter, setFilter] = useState('');

    // Fetch data from the new API
    async function fetchData() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_URL}/api/product/products`); // Updated API endpoint
            setProducts(res.data.products); // Set products from the API response
        } catch (error) {
            alert('Error in Fetching data');
        }
    }

    // Handle search filtering
    function handleSearch() {
        if (filter === '') {
            return alert('Please enter something');
        }
        const filtered = products.filter((el) =>
            el.category.toLowerCase().includes(filter.toLowerCase()) ||
            el.title.toLowerCase().includes(filter.toLowerCase()) ||
            el.description.toLowerCase().includes(filter.toLowerCase())
        );
        setFproducts(filtered);  // Set filtered products
        setFilter('');  // Clear the search input
    }

    // Fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {/* Search Input */}
            <div className='bg-black sm:w-11/12 p-3 m-auto md: lg:w-1/2 mt-3 rounded-3xl flex gap-3'>
                <input
                    placeholder='Search here'
                    className='p-3 rounded-3xl w-4/5 outline-none border-0'
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <button onClick={handleSearch} className='text-white sm:p-2 w-1/5 bg-orange-400 rounded-3xl'>
                    Search
                </button>
            </div>

            {/* Search Results */}
            <div>
                {fproducts ? (
                    <div className='w-full flex flex-wrap justify-evenly items-center p-4 gap-3'>
                        {fproducts.map((product) => {
                            return <ProductCard key={product._id} product={product}></ProductCard>;  // Use _id from new data structure
                        })}
                    </div>
                ) : (
                    <h1 className='text-center m-6'>Your results will be shown here</h1>
                )}
            </div>
        </>
    );
}

export default Search;
