import './css/Login.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            alert('Login successful!');
            console.log(response.data);
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container container">
                <div className="login-header">
                    <h3 className=' text-center mb-3'>Welcome Back</h3>
                    <p>Don’t have an account? <Link to="/signup">Sign up</Link></p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className='form-control'
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className='form-control'
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <button type="submit" className="login-btn btn btn-dark w-100 text-center">Log In</button>

                 
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
