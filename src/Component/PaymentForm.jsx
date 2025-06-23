import React, { useState } from 'react';
import { Container, Spinner, Alert, Row, Col } from 'react-bootstrap-v5';
import { useProductContext } from './Context/ProductContext';

import {
    Wallet,
    DeliveryDining,
    AccountBalance,
    Paid,
} from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CategeoriesItem1 from './assets/CategeoriesItem1.jpg';
import CategeoriesItem3 from './assets/CategeoriesItem3.webp';
import CategeoriesItem4 from './assets/CategeoriesItem4.png';
import HomeNewslaterSection from './HomeNewslaterSection';

const PaymentFormPage = () => {
    const { totalItems, totalPrice } = useProductContext();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        zip: '',
        state: '',
        country: '',
        address: '',
        city: '',
        landmark: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentError, setPaymentError] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleMethodSelect = (methodName) => {
        setSelectedMethod(methodName);
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();

        if (!selectedMethod) {
            setPaymentError('Please select a payment method.');
            return;
        }

        if (!formData.cardNumber || formData.cardNumber.length < 12) {
            setPaymentError('Invalid card number.');
            return;
        }

        if (!formData.address || !formData.city) {
            setPaymentError('Please complete the address section.');
            return;
        }

        setLoading(true);
        setPaymentError('');
        setPaymentSuccess(false);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const isSuccess = Math.random() > 0.2;

            if (isSuccess) {
                setPaymentSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    cardNumber: '',
                    expiry: '',
                    cvv: '',
                    zip: '',
                    state: '',
                    country: '',
                    address: '',
                    city: '',
                    landmark: '',
                });
                setSelectedMethod('');
            } else {
                setPaymentError('Payment failed. Please try again.');
            }
        } catch (err) {
            setPaymentError('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    const paymentMethods = [
        { icon: <DeliveryDining />, name: 'Cash on Delivery' },
        { icon: <Wallet />, name: 'Wallets' },
        { icon: <AccountBalance />, name: 'Net Banking' },
        { icon: <Paid />, name: 'PayPal' },
    ];

    return (
        <>
            <section className="payment-integration-section py-5">
                <Container>
                    <Row className="g-4">
                        <Col lg={6}>
                            <div className="bg-white p-4 rounded shadow-sm h-100">
                                <h5 className="mb-3">Choose Payment Method</h5>
                                {paymentMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        className={`mb-2 p-2 rounded border d-flex align-items-center cursor-pointer ${selectedMethod === method.name ? 'bg-dark text-white' : 'bg-light'}`}
                                        onClick={() => handleMethodSelect(method.name)}
                                    >
                                        {method.icon}
                                        <span className="ms-2">{method.name}</span>
                                    </div>
                                ))}

                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    className="mt-4"
                                >
                                    {[CategeoriesItem1, CategeoriesItem3, CategeoriesItem4].map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <img src={img} alt={`slide-${i}`} className="img-fluid rounded" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <h5 className="mt-4 mb-3">Delivery Address</h5>
                                <form>
                                    <div className="mb-3">
                                        <label>Full Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="123 Street, City"
                                            required
                                        />
                                    </div>
                                    <div className="d-flex gap-2 mb-3">
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            placeholder="City"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="landmark"
                                            className="form-control"
                                            placeholder="Landmark (Optional)"
                                            value={formData.landmark}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </form>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="bg-white p-4 rounded shadow-sm h-100">
                                <h4 className="mb-3">Payment Details</h4>
                                {paymentError && <Alert variant="danger">{paymentError}</Alert>}
                                {paymentSuccess && <Alert variant="success">🎉 Payment successful!</Alert>}

                                <form onSubmit={handlePaymentSubmit}>
                                    <div className="mb-3">
                                        <label>Cardholder Name</label>
                                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email Address</label>
                                        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label>Card Number</label>
                                        <input type="text" name="cardNumber" className="form-control" value={formData.cardNumber} onChange={handleChange} required />
                                    </div>
                                    <div className="d-flex gap-2 mb-3">
                                        <input type="text" name="expiry" className="form-control" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} required />
                                        <input type="password" name="cvv" className="form-control" placeholder="CVV" maxLength={3} value={formData.cvv} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label>Country</label>
                                        <select name="country" className="form-select" value={formData.country} onChange={handleChange} required>
                                            <option value="">Select Country</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="Australia">Australia</option>
                                        </select>
                                    </div>
                                    <div className="d-flex gap-2 mb-4">
                                        <input type="text" name="zip" className="form-control" placeholder="ZIP" value={formData.zip} onChange={handleChange} required />
                                        <input type="text" name="state" className="form-control" placeholder="State" value={formData.state} onChange={handleChange} required />
                                    </div>

                                    <h6 className="text-success mb-3">You Will Save ₹200 on this order</h6>
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th>Qty</th>
                                                <th>Total</th>
                                                <th>Delivery</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{totalItems}</td>
                                                <td className="text-danger fw-bold">₹{totalPrice}</td>
                                                <td className="text-success">FREE</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                                        {loading ? (
                                            <>
                                                <Spinner animation="border" size="sm" className="me-2" /> Processing...
                                            </>
                                        ) : (
                                            <>Pay ₹{totalPrice}</>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <HomeNewslaterSection />
        </>
    );
};

export default PaymentFormPage;
