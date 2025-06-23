import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();

    const [values, setValues] = useState({
        id: id,
        ProductName: '',
        ProductPrice: '',
        ProductInfo1: '',
        Discount: '',
        Category: '',
        Featured: '',
        image: '',
        LeftCardImg: ''
    });

    useEffect(() => {
        axios.get('http://localhost:3001/cardata/' + id)
            .then(res => {
                setValues({ ...values, ...res.data });
            })
            .catch(err => console.log(err));
    }, [id]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/cardata/' + id, values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValues({
                ...values,
                image: file
            });
        }
    };

    return (
        <section className="update-page">
            <div className="container">
                <div className="col-lg-8 mx-auto">
                    <h2 className="text-center mb-4">Update Product Information</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-group row mb-3">
                            <label htmlFor="productId" className="col-sm-3 col-form-label">ID</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="productId" value={values.id} disabled />
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="productName" className="col-sm-3 col-form-label">Product Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="productName" placeholder="Enter Product Name" value={values.ProductName} onChange={e => setValues({ ...values, ProductName: e.target.value })} required />
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="productPrice" className="col-sm-3 col-form-label">Product Price</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="productPrice" placeholder="Enter Product Price" value={values.ProductPrice} onChange={e => setValues({ ...values, ProductPrice: e.target.value })} required />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="form-group row mb-3">
                            <label htmlFor="productInfo1" className="col-sm-3 col-form-label">Product Info 1</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="productInfo1" placeholder="Enter Product Info 1" value={values.ProductInfo1} onChange={e => setValues({ ...values, ProductInfo1: e.target.value })} />
                            </div>
                        </div>

                        {/* Discount and Category */}
                        <div className="form-group row mb-3">
                            <label htmlFor="discount" className="col-sm-3 col-form-label">Discount</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="discount" placeholder="Enter Discount" value={values.Discount} onChange={e => setValues({ ...values, Discount: e.target.value })} />
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="category" className="col-sm-3 col-form-label">Category</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="category" placeholder="Enter Category" value={values.Category} onChange={e => setValues({ ...values, Category: e.target.value })} />
                            </div>
                        </div>




                     

                

                        <div className="form-group row mb-3">
                            <label htmlFor="featured" className="col-sm-3 col-form-label">Featured</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="featured" placeholder="Enter Featured" value={values.Featured} onChange={e => setValues({ ...values, Featured: e.target.value })} />
                            </div>
                        </div>

                        {/* Image Inputs */}
                        <div className="form-group row mb-3">
                            <label htmlFor="productImage" className="col-sm-3 col-form-label">Product Image</label>
                            <div className="col-sm-9">
                                <input type="file" className="form-control" id="productImage" onChange={handleFileChange} />
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="leftCardImg" className="col-sm-3 col-form-label">Left Card Image</label>
                            <div className="col-sm-9">
                                <input type="file" className="form-control" id="leftCardImg" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary">Update Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Update;
