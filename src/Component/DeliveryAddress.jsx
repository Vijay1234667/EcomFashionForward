import React from 'react'
import './css/DeliveryAddress.css';
import LoginAbsoluteImg from './assets/LoginAbsoluteImg.svg'
import Deliveryaddresstopimg from './assets/Deliveryaddresstopimg.svg'
const DeliveryAddressPage = () => {
    return (
        <>
            <section className="Delivery-Address-Section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h1><span></span>Enter Your
                            Delivery Address</h1>
                    </div>
                    <div className="row">
                        <div className="form-body-content">
                            <form>
                                <div className="col-md-6 shadow-section mx-auto p-3">
                                    <div className="mb-3">
                                        <label className="form-label">Full name</label>
                                        <input type="text" placeholder='Full name' className="form-control" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" placeholder='Enter Your Email' className="form-control" required/>
                                    </div>
                              
                                    <div className="mb-3">
                                        <label className="form-label">Street address</label>
                                        <input type="text" placeholder='Enter Your Street address'  className="form-control" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Flat/Other(Optional)</label>
                                        <input type="text" placeholder='Enter Your Flat/Other(Optional)' className="form-control" required/>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="mb-3 col-md-5">
                                            <label className="form-label" required>City</label>
                                            <input type="text"placeholder='Enter Your City'  className="form-control"/>
                                        </div>
                                        <div className="mb-3 col-md-5">
                                            <label className="form-label" required>Pincode</label>
                                            <input type="text" placeholder='Enter Your Pincode' className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">State</label>
                                        <select className="form-select" id="country" name="country">
                                            <option value="AF">Maharashtra</option>
                                            <option value="AX">Goa</option>
                                            <option value="AX">Rajasthan</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 text-center">
                                        <input href="#paymentform" type="submit" value="Continue to payment" className="btn Google-btn"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="delivery-absoluteimg d-none d-md-block">
                        <img className="img-fluid" src={Deliveryaddresstopimg} alt="" width="420px"/>
                    </div>
                    <div className="delivery-absoluteimgleft d-none d-md-block">
                        <img className="img-fluid" src={LoginAbsoluteImg} alt="" width="420px"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DeliveryAddressPage
