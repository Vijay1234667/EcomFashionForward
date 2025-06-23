import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [inputData, setInputData] = useState({
        ProductName: '',
        ProductPrice: '',
        ProductInfo1: '',
        Discount: '',
        category: '',
        featured: '',
        LeftCardImg: '',
        image: ''
    });

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/cardata', inputData)
            .then(res => {
                alert("Data added successfully!");
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <section className='add-product-section'>
                <div className="container">
                    <div className="col-lg-6 mx-auto">
                        <form onSubmit={handleSubmit} className="product-form">
                            <h3 className="text-center mb-4">Add New Product</h3>

                            {/* Product Name */}
                            <div className="form-group mb-3">
                                <label className="form-label">Product Name</label>
                                <input type="text"
                                       placeholder="Enter Product Name"
                                       onChange={e => setInputData({ ...inputData, ProductName: e.target.value })}
                                       className="form-control" 
                                       required />
                            </div>

                            {/* Product Price */}
                            <div className="form-group mb-3">
                                <label className="form-label">Product Price</label>
                                <input type="text"
                                       placeholder="Enter Product Price"
                                       onChange={e => setInputData({ ...inputData, ProductPrice: e.target.value })}
                                       className="form-control"
                                       required />
                            </div>

                            {/* Product Info */}
                            <div className="form-group mb-3">
                                <label className="form-label">Product Info</label>
                                <input type="text"
                                       placeholder="Enter Product Info"
                                       onChange={e => setInputData({ ...inputData, ProductInfo1: e.target.value })}
                                       className="form-control" 
                                       required />
                            </div>

                            {/* Discount */}
                            <div className="form-group mb-3">
                                <label className="form-label">Discount</label>
                                <input type="text"
                                       placeholder="Enter Discount"
                                       onChange={e => setInputData({ ...inputData, Discount: e.target.value })}
                                       className="form-control" 
                                       required />
                            </div>

                            {/* Category */}
                            <div className="form-group mb-3">
                                <label className="form-label">Category</label>
                                <input type="text"
                                       placeholder="Enter Category"
                                       onChange={e => setInputData({ ...inputData, category: e.target.value })}
                                       className="form-control"
                                       required />
                            </div>


                   

                            {/* Featured */}
                            <div className="form-group mb-3">
                                <label className="form-label">Featured</label>
                                <input type="text"
                                       placeholder="Enter Featured"
                                       onChange={e => setInputData({ ...inputData, featured: e.target.value })}
                                       className="form-control"
                                       required />
                            </div>

                            {/* Left Card Image */}
                            <div className="form-group mb-3">
                                <label className="form-label">Left Card Image</label>
                                <input type="file"
                                       onChange={e => setInputData({ ...inputData, LeftCardImg: e.target.value })}
                                       className="form-control"
                                       required />
                            </div>

                            {/* Main Image */}
                            <div className="form-group mb-3">
                                <label className="form-label">Product Image</label>
                                <input type="file"
                                       onChange={e => setInputData({ ...inputData, image: e.target.value })}
                                       className="form-control"
                                       required />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary">
                                    <i className="fas fa-save"></i> Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Add;
