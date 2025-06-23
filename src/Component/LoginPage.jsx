import './css/Login.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/submit', formData)
            alert('Data submitted successfully!')
        } catch (error) {
            console.error('Submission error:', error)
            alert('Failed to submit data.')
        }
    }

    return (
        <>
            <section className="Login-Page-Section">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-5">
                            <div className="mb-4 ">
                                <h3>Log In</h3>
                                <p>Don’t have an account yet? <Link to="signup" className="ms-1">Register here</Link></p>
                            </div>
                            <form className="form-body-content" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="text" name="fname" placeholder="First Name" onChange={handleChange} required />
                                    <input type="text" name="lname" placeholder="Last Name" onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />                                </div>

                                <div className="mb-3 text-center">
                                    <a href="/" className="btn sign-btn">Log In</a>
                                </div>
                                <div className="mb-3">
                                    <p>Sign in with your social network.</p>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default LoginPage
