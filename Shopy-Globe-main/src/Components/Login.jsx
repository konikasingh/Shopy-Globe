import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/Signin.css'
import axios from 'axios';
import { MyContext } from '../Context/MyProvider';
import { toast } from 'react-toastify';


function Login() {
    const { currUser, setCurrUser } = useContext(MyContext)
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [showpass, setShowpass] = useState(true);
    async function handelLogin(e) {
        e.preventDefault();
        try {
            let res = await axios.post(`${import.meta.env.VITE_URL}/api/auth/login`,
                { email, password }
            )
            setCurrUser(res.data.user);
            localStorage.setItem('sgauthtoken', res.data.token);
            setemail('')
            setPassword('')
            toast.success(res.data.message);
            navigate('/');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='signup-page'>
            <form action="" onSubmit={handelLogin}>
                <h1 className='text-orange-400'>Login to Your Account</h1>
                <input required type="email" placeholder='Enter Email' value={email} onChange={(e) => setemail(e.target.value)} />
                <div className='pass'>
                    <input required type={showpass ? "text" : 'password'} placeholder='Enter pass' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {showpass ? <i onClick={() => setShowpass(false)} className="ri-eye-close-fill"></i> : <i className="ri-eye-fill" onClick={() => setShowpass(true)}></i>}
                </div>
                <button className='w-full bg-orange-400 p-3 text-xl' type='Submit'>Login</button>
                <p className='w-full bg-orange-400 p-3 text-center text-xl' onClick={() => navigate('/signin')}>New user?</p>
            </form>
        </div>
    )
}

export default Login
