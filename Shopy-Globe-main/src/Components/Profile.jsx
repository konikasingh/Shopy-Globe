import React, { useContext } from 'react';
import { MyContext } from '../Context/MyProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    const { currUser, setCurrUser } = useContext(MyContext);

    // Handle user logout
    function logout() {
        localStorage.removeItem('sgauthtoken');
        setCurrUser(null);
        toast.success("Logout successfully");
        navigate('/');
    }

    return (
        <>
            {currUser && localStorage.getItem('sgauthtoken') ? (
                <div className='flex flex-col lg:flex-row items-center justify-between mt-10 p-6 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-200 rounded-lg shadow-lg max-w-4xl mx-auto'>
                    {/* Profile Image with glowing border */}
                    <div className='relative mb-6 lg:mb-0'>
                        <img
                            className='w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg glow-effect'
                            src="https://t4.ftcdn.net/jpg/05/12/73/07/240_F_512730774_84GcHxW2FWpJUbqfvjwWxiJihAz2CtoF.jpg"
                            alt="Profile"
                        />
                        <div className="absolute inset-0 border border-white rounded-full opacity-75 animate-pulse"></div>
                    </div>

                    {/* User Information on the right */}
                    <div className='flex flex-col items-center lg:items-start lg:ml-10'>
                        <h1 className='text-3xl font-bold text-white mb-3'>User Profile</h1>
                        <p className='text-white text-lg'><strong>Name:</strong> {currUser.name}</p>
                        <p className='text-white text-lg'><strong>Email:</strong> {currUser.email}</p>
                        <p className='text-white text-lg mb-4'><strong>Role:</strong> {currUser.role}</p>

                        {/* Buttons */}
                        <div className='flex space-x-4'>
                            {/* Sell Products Button */}
                            <Link
                                className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105'
                                to={'/add'}
                            >
                                Sell Products
                            </Link>

                            {/* Logout Button */}
                            <button
                                className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105'
                                onClick={logout}
                            >
                                Logout <i className="ri-logout-box-r-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center mt-10'>
                    <h1 className='text-2xl text-gray-600'>User not logged in</h1>
                </div>
            )}
        </>
    );
}

export default Profile;
