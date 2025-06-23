import React, { useEffect } from 'react';
import { useProductContext } from './Context/ProductContext';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import { NavLink } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
      const existingProducts = JSON.parse(localStorage.getItem('carts')) || [];
      const productExists = existingProducts.some(
        product => product.id === singleProduct[0].id
      );

      if (!productExists) {
        const newProduct = { ...singleProduct[0], quantity: 1 };
        const updatedProducts = [...existingProducts, newProduct];

        setCarts(updatedProducts);
        localStorage.setItem('carts', JSON.stringify(updatedProducts));

        setTotalPrice(prevPrice => prevPrice + singleProduct[0].ProductPrice);
        setTotalItems(prevItems => prevItems + 1);
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

      <section className="main-top-cart-delivery-section py-4">
        <div className="container">
          <div className="table-responsive bg-white p-3 rounded shadow-sm">
            <table className="table align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {groupedItems.map((c, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td className="text-capitalize fw-semibold">{c.ProductName}</td>
                    <td>{c.category}</td>
                    <td>
                      <CurrencyRupeeIcon fontSize="small" />
                      {c.ProductPrice}
                    </td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className="btn btn-outline-primary btn-sm me-2"
                          onClick={() => handleDecrement(key)}
                        >
                          -
                        </button>
                        <span>{c.quantity}</span>
                        <button
                          className="btn btn-outline-primary btn-sm ms-2"
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
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemoveItem(key)}
                      >
                        <DeleteForeverIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="payment-summary-section mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="shadow-md p-4 payment-summary-body mb-4 bg-white rounded border">
                <h5 className="paysum-head mb-3">Payment Summary</h5>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Total Items</td>
                      <td>{totalItems}</td>
                    </tr>
                    <tr>
                      <td>Delivery Charges</td>
                      <td className="text-success fw-medium">Free Delivery</td>
                    </tr>
                    <tr>
                      <td>
                        <h5 className="fw-bold">Total Amount</h5>
                      </td>
                      <td className="text-danger fw-bold">
                        <CurrencyRupeeIcon />
                        {totalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center place-order-btn">
                  <NavLink to="/paymentform">
                    <button className="btn btn-dark btn-lg px-4 mt-2">
                      Continue
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
