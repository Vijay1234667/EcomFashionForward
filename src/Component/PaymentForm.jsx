import React, { useState } from "react";
import { Container, Spinner, Alert, Row, Col } from "react-bootstrap-v5";
import { useProductContext } from "./Context/ProductContext";
import {
  Wallet,
  DeliveryDining,
  AccountBalance,
  Paid,
} from "@mui/icons-material";

const PaymentFormPage = () => {
  const { totalItems, totalPrice } = useProductContext();

  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [orderId, setOrderId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    zip: "",
    state: "",
    country: "",
    address: "",
    city: "",
    landmark: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const paymentMethods = [
    { icon: <DeliveryDining />, name: "Cash on Delivery" },
    { icon: <Wallet />, name: "Wallets" },
    { icon: <AccountBalance />, name: "Net Banking" },
    { icon: <Paid />, name: "PayPal" },
  ];

  const handleNextStep = () => {
    if (step === 1 && !selectedMethod) {
      setPaymentError("Please select a payment method.");
      return;
    }
    if (step === 2 && (!formData.address || !formData.city)) {
      setPaymentError("Please complete your delivery address.");
      return;
    }
    if (
      step === 3 &&
      selectedMethod !== "Cash on Delivery" &&
      (!formData.cardNumber ||
        formData.cardNumber.length < 12 ||
        !formData.expiry ||
        !formData.cvv)
    ) {
      setPaymentError("Please enter valid card details.");
      return;
    }
    setPaymentError("");
    setStep(step + 1);
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setPaymentError("");
    }
  };

  const handlePaymentSubmit = async () => {
    setLoading(true);
    setPaymentError("");
    try {
      await new Promise((res) => setTimeout(res, 2000));
      const success = Math.random() > 0.2;
      if (success) {
        setOrderId(Math.floor(100000 + Math.random() * 900000));
        setStep(4);
      } else {
        setPaymentError("Payment failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="payment-integration-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} md={10} sm={12}>
            <div className="bg-white p-4 rounded shadow-sm">
              {/* Step Indicators */}
              <div className="d-flex justify-content-between mb-4">
                {["Method", "Address", "Payment", "Done"].map((s, i) => (
                  <div
                    key={i}
                    className={`fw-semibold ${
                      step === i + 1 ? "text-dark" : "text-muted"
                    }`}
                  >
                    {i + 1}. {s}
                  </div>
                ))}
              </div>

              {/* Step 1 - Payment Method */}
              {step === 1 && (
                <>
                  <h5 className="mb-3">Choose Payment Method</h5>
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`mb-2 p-3 rounded border d-flex align-items-center cursor-pointer ${
                        selectedMethod === method.name
                          ? "bg-dark text-white"
                          : "bg-light"
                      }`}
                      onClick={() => setSelectedMethod(method.name)}
                    >
                      {method.icon}
                      <span className="ms-2">{method.name}</span>
                    </div>
                  ))}

                  <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-dark" onClick={handleNextStep}>
                      Continue
                    </button>
                  </div>
                </>
              )}

              {/* Step 2 - Address */}
              {step === 2 && (
                <>
                  <h5 className="mb-3">Delivery Address</h5>
                  <input
                    type="text"
                    name="address"
                    className="form-control mb-3"
                    placeholder="123 Street"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <div className="d-flex gap-2 mb-3">
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="landmark"
                      className="form-control"
                      placeholder="Landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={handleBackStep}
                    >
                      Back
                    </button>
                    <button className="btn btn-dark" onClick={handleNextStep}>
                      Continue
                    </button>
                  </div>
                </>
              )}

              {/* Step 3 - Payment */}
              {step === 3 && (
                <>
                  <h5 className="mb-3">Payment Details</h5>
                  {paymentError && (
                    <Alert variant="danger">{paymentError}</Alert>
                  )}

                  {selectedMethod === "Cash on Delivery" ? (
                    <p className="text-success">
                      ✅ Cash on Delivery selected. Pay when order arrives.
                    </p>
                  ) : (
                    <>
                      <input
                        type="text"
                        name="cardNumber"
                        className="form-control mb-3"
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={handleChange}
                      />
                      <div className="d-flex gap-2 mb-3">
                        <input
                          type="text"
                          name="expiry"
                          className="form-control"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={handleChange}
                        />
                        <input
                          type="password"
                          name="cvv"
                          className="form-control"
                          placeholder="CVV"
                          value={formData.cvv}
                          onChange={handleChange}
                        />
                      </div>
                    </>
                  )}

                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={handleBackStep}
                      disabled={loading}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-dark"
                      onClick={handlePaymentSubmit}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                          Processing...
                        </>
                      ) : (
                        <>Pay ₹{totalPrice}</>
                      )}
                    </button>
                  </div>
                </>
              )}

              {/* Step 4 - Done */}
              {step === 4 && (
                <div className="text-center py-5">
                  <h3 className="text-success mb-3">🎉 Payment Successful!</h3>
                  <p>
                    Your order ID: <strong>#{orderId}</strong>
                  </p>
                  <p className="text-muted">Estimated delivery in 4-6 days</p>

                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setStep(3)}
                    >
                      Back
                    </button>
                    <button className="btn btn-dark">Back to Home</button>
                  </div>
                </div>
              )}

              {paymentError && step !== 4 && (
                <Alert variant="danger" className="mt-3">
                  {paymentError}
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PaymentFormPage;
