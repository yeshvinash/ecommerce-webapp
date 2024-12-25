// components/ProductModal.js
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./ProductModal.css";

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;
  return (
    <>
      <Modal className="product-modal" show={isOpen} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Description: </strong>
            {product.description}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;
