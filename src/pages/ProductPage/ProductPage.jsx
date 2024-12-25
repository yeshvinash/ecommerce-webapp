// pages/ProductsPage.js
import React, { useState } from "react";
import ProductListing from "../ProductListing.JSX";
import ProductModal from "../../components/ProductModal/ProductModal";

const ProductPage = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <ProductListing
        onProductClick={setSelectedProduct}
        addToCart={addToCart}
      />
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default ProductPage;
