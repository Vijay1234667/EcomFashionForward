import React, { useEffect } from "react";
import { useProductContext } from "./Context/ProductContext";
import BreadcrumbFixedTop from "./BreadcrumbFixedTop";
import { NavLink } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CartsSingleProduct = () => {
  const {
    singleProduct,
    handleDecrement,
    handleIncrement,
    totalItems,
    setTotalItems,
    handleRemoveItem,
    totalPrice,
    carts,
    setCarts,
    setTotalPrice,
  } = useProductContext();

  useEffect(() => {
    if (singleProduct.length > 0) {
      const existingProducts = JSON.parse(localStorage.getItem("carts")) || [];
      const productExists = existingProducts.some(
        (product) => product.id === singleProduct[0].id
      );

      if (!productExists) {
        const newProduct = { ...singleProduct[0], quantity: 1 };
        const updatedProducts = [...existingProducts, newProduct];

        setCarts(updatedProducts);
        localStorage.setItem("carts", JSON.stringify(updatedProducts));

        setTotalPrice((prevPrice) => prevPrice + singleProduct[0].ProductPrice);
        setTotalItems((prevItems) => prevItems + 1);
      }
    }
  }, [singleProduct]);

  // Grouping logic: group by id and ProductPrice
  const groupedCarts = carts.reduce((acc, item) => {
    const key = `${item.id}-${item.ProductPrice}`;
    if (!acc[key]) {
      acc[key] = { ...item };
    } else {
      acc[key].quantity += item.quantity;
    }
    return acc;
  }, {});

  const groupedItems = Object.values(groupedCarts);

  return (
    <>
      <BreadcrumbFixedTop Title="Carts" Subtitle="Carts" />

      <section className="main-top-cart-delivery-section">
        <div className="container">
           <table className="table  text-center mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {groupedItems.map((c, key) => (
                  <tr key={key} className="cart-row">
                    <td className=" text-secondary">{key + 1}</td>
                    <td className=" text-capitalize">{c.ProductName}</td>
                    <td>
                      <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                        {c.category}
                      </span>
                    </td>
                    <td className="text-mu">
                      <CurrencyRupeeIcon fontSize="small" />
                      {c.ProductPrice}
                    </td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className="btn btn-sm btn-light border rounded-circle me-2 quantity-btn"
                          onClick={() => handleDecrement(key)}
                        >
                          –
                        </button>
                        <span className="fw-semibold">{c.quantity}</span>
                        <button
                          className="btn btn-sm btn-light border rounded-circle ms-2 quantity-btn"
                          onClick={() => handleIncrement(key)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-success fw-bold">
                      <CurrencyRupeeIcon fontSize="small" />
                      {c.ProductPrice * c.quantity}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger "
                        onClick={() => handleRemoveItem(key)}
                      >
                        <DeleteForeverIcon fontSize="small" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </section>

      <div className="payment-summary-section mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto">
              <div className="payment-summary-body bg-white rounded-4  border p-4">
                <h4 className="fw-bold mb-4 text-dark text-center">
                  Payment Summary
                </h4>

                <table className="table table-bordered mb-4">
                  <tbody>
                    <tr>
                      <td className="text-muted">Total Items</td>
                      <td className="fw-semibold text-end">{totalItems}</td>
                    </tr>
                    <tr>
                      <td className="text-muted">Delivery Charges</td>
                      <td className="text-success fw-semibold text-end">
                        Free Delivery
                      </td>
                    </tr>
                    <tr className="border-top">
                      <td>
                        <h5 className="fw-bold mb-0">Total Amount</h5>
                      </td>
                      <td className="text-danger fw-bold text-end fs-5">
                        <CurrencyRupeeIcon fontSize="small" />
                        {totalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-center">
                  <NavLink to="/paymentform">
                    <button className="btn btn-dark w-100 py-3 rounded-3 fw-semibold">
                      Continue to Payment
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartsSingleProduct;
