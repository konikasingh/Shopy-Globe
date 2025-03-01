import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/Signin.css'
import axios from 'axios';
import { MyContext } from '../Context/MyProvider';
import { toast } from 'react-toastify';


function Signin() {
    const { currUser, setCurrUser } = useContext(MyContext);
    const navigate = useNavigate();
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [showpass, setShowpass] = useState(true);
    async function handelSignin(e) {
        e.preventDefault();
        try {
            let res = await axios.post(`${import.meta.env.VITE_URL}/api/auth/signup`,
                { username, email, password }
            )
            console.log(res);
            localStorage.setItem('sgauthtoken', res.data.token);
            setCurrUser(res.data.newUser);
            //empty form
            setPassword('');
            setusername('');
            setemail('');
            toast.success(res.data.message);
            navigate('/')
        } catch (error) {
            alert(error.response.data.message)
        }

    }
    return (
        <div className='signup-page'>
            <form action="" onSubmit={handelSignin}>
                <h1 className='text-orange-400'>Welcome to Shopy Globe</h1>
                <input required type="text" placeholder='Enter Username' value={username} onChange={(e) => setusername(e.target.value)} />
                <input required type="email" placeholder='Enter Email' value={email} onChange={(e) => setemail(e.target.value)} />
                <div className='pass'>
                    <input required type={showpass ? "text" : 'password'} placeholder='Enter pass' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {showpass ? <i onClick={() => setShowpass(false)} className="ri-eye-close-fill"></i> : <i class="ri-eye-fill" onClick={() => setShowpass(true)}></i>}
                </div>
                <button className='w-full bg-orange-400 p-3 text-xl' type='Submit'>Signup</button>
                <p className='w-full bg-orange-400 p-3 text-center text-xl' onClick={() => navigate('/login')}>Already a user?</p>
            </form>
        </div>
    )
}

export default Signin
