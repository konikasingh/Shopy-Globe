import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
// Create a Context
export const MyContext = createContext();
const MyProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);
    async function fetchUser() {
        try {
            let res = await axios.get(`${import.meta.env.VITE_URL}/api/auth/getuser`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('sgauthtoken')}`
                }
            });
            console.log(res);
            setCurrUser(res.data.user);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    useEffect(() => {
        if (localStorage.getItem('sgauthtoken')) {
            fetchUser();
        }
    }, [])

    return (
        <MyContext.Provider value={{ currUser, setCurrUser }}>
            {children}
        </MyContext.Provider>
    );
};
export default MyProvider;