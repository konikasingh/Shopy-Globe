import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../Css/Nav.css'

function Nav() {
    let cart = useSelector((state) => state.cart.value);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <nav>
                <h3><i className="ri-shopping-bag-fill"></i>
                    <b>Shopy Globe</b></h3>
                <div className={`menu ${menuOpen ? 'slidemenu' : ''}`}>
                    <i
                        id="mnuclose"
                        className={`ri-arrow-right-line ${menuOpen ? '' : 'rotate180'}`}
                        onClick={toggleMenu}
                    ></i>
                    <Link className="options carticon" to={'/cart'} onClick={closeMenu}>
                        <i className="ri-shopping-cart-2-fill"></i>
                        <p>{cart.length}</p>
                    </Link>
                    <Link className="options" to={'/'} onClick={closeMenu}>
                        Home
                    </Link>
                    <Link className="options" to={'/search'} onClick={closeMenu}>
                        <i className="ri-search-line"></i> Search
                    </Link>
                    {!localStorage.getItem('sgauthtoken') ?
                        <Link className="options" to={'/login'} onClick={closeMenu}>
                            <i className="ri-user-3-fill"></i> Signin
                        </Link> : <Link className='options' to={'/profile'}>
                            <i className="ri-user-3-line"></i> Profile
                        </Link>
                    }

                </div>
                <i id="mnubtn" className="ri-menu-line" onClick={toggleMenu}></i>
            </nav>


        </>
    );
}

export default Nav;
