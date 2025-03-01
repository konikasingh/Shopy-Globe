// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" style={styles.link}>Go Back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        color: '#343a40',
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    message: {
        fontSize: '18px',
        marginBottom: '30px',
    },
    link: {
        fontSize: '16px',
        color: '#007bff',
        textDecoration: 'none',
    },
};

export default NotFound;
