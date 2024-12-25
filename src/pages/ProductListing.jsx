import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductListing.css";
import { Link } from "react-router-dom";

const ProductListing = ({ onProductClick, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <section className="product-list">
        <div className="container">
          <h1 className="text-black fw-bolder mb-5">Product List</h1>
          <div className="products-gridbox">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="product-body d-flex flex-column justify-content-between">
                  <div className="mb-5">
                    <Link
                      to=""
                      className="d-block"
                      onClick={() => onProductClick(product)}
                    >
                      {product.title}
                    </Link>
                    <span className="d-inline-block price-label ">
                      ${product.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn custom-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListing;
