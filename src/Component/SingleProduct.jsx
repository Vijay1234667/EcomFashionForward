import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from './Context/ProductContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import './css/AddToCart.css';

import { Col, Container } from 'react-bootstrap-v5';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';

const API = 'http://localhost:3001/cardata';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentImg, setCurrentImg] = useState('');

const { getSingleProduct, singleProduct, handleCart, base_url, public_url } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  useEffect(() => {
    if (singleProduct[0]) {
      const mainImg = singleProduct[0].image;
    setCurrentImg(`${base_url}${public_url}/${mainImg}`);
      setTotalPrice(singleProduct[0].ProductPrice);
    }
  }, [singleProduct]);

  useEffect(() => {
    if (singleProduct.length > 0) {
      const existingProducts = JSON.parse(localStorage.getItem('itemset')) || [];
      const productExists = existingProducts.some(product => product.id === singleProduct[0].id);

      if (!productExists) {
        existingProducts.push(singleProduct[0]);
        localStorage.setItem('itemset', JSON.stringify(existingProducts));
      }
    }
  }, [singleProduct]);




  const addToMongoDB = async (product, quantity) => {
    const cartItem = {
      id: product[0].id,
      ProductName: product[0].ProductName,
      ProductPrice: product[0].ProductPrice,
      category: product[0].category,
      quantity: quantity,
    };

    try {
      const res = await fetch('http://localhost:3001/api/cart', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });
      
      
      console.log(res,"j");

      const data = await res.json();
      console.log('✅ Saved to MongoDB:', data);
    } catch (error) {
      console.error('❌ Error saving to MongoDB:', error);
    }
  };




  return (
    <>
      <BreadcrumbFixedTop Title={singleProduct[0]?.ProductName} />
      <Container fluid className='p-0'>
   <section className="add-to-bag-main-page py-5">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      
      {/* Product Image */}
      <Col md={6} xs={12}>
        <div className=" text-center p-3">
          <img
            className="img-fluid rounded-3 product-preview"
            src={currentImg}
            alt={singleProduct[0]?.ProductName}
            style={{ maxHeight: "380px", objectFit: "contain" }}
          />
        </div>
      </Col>

      {/* Product Details */}
      <Col md={6} xs={12}>
        <div className="bg-white rounded-4 shadow-sm p-3">
          {/* Title & Info */}
          <h3 className="fw-bold text-dark mb-2">
            {singleProduct[0]?.ProductName}
          </h3>
          <p className="text-muted small mb-3">
            {singleProduct[0]?.ProductInfo1}
          </p>

          {/* Category */}
          <div className="mb-3">
            <h6 className="text-secondary mb-1">Category</h6>
            <span 
              className="badge bg-light text-dark px-3 py-2 rounded-pill text-nowrap"
              style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {singleProduct[0]?.category}
            </span>
          </div>

          {/* Price & Add to Cart */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="text-success fw-bold mb-0">
              ₹{totalPrice}
            </h3>
          </div>

          <Link
            className="btn btn-dark w-100 py-3 rounded-3 fw-semibold d-flex justify-content-center align-items-center gap-2"
            onClick={() => {
              handleCart(singleProduct, quantity, totalPrice);
              addToMongoDB(singleProduct, quantity);
            }}
            to="/cartsingleproduct"
          >
            <AddShoppingCartIcon />
            Add To Cart
          </Link>
        </div>
      </Col>
    </div>
  </div>
</section>


      </Container>
    </>
  );
};

export default SingleProduct;
