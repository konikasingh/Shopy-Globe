import React from 'react'
import '../Css/Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Shopy Globe</h2>
                </div>
                <div className="footer-links">
                    <Link to={'/'} onClick={() => window.scrollBy({ top: -5000, behavior: 'smooth' })}>Home</Link>
                    <Link to={'/cart'} onClick={() => window.scrollBy({ top: -5000, behavior: 'smooth' })}>View cart</Link>
                    <Link to={'/search'} onClick={() => window.scrollBy({ top: -5000, behavior: 'smooth' })}>Search</Link>
                </div>
                <div className="footer-social">
                    <a href="https://main--ephemeral-cannoli-a899f8.netlify.app/" target='_blank'><i className="ri-user-fill"></i></a>
                    <a href="https://github.com/Kuldeepkant26" target='_blank'><i className="ri-github-line"></i></a>
                    <a href=" www.linkedin.com/in/kuldeep-kant-975746281" target='_blank'><i className="ri-linkedin-fill"></i></a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 Shopy Globe. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer
