import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as Actions from "../actions/index.js";
import Product from "./Product.js";
import ProductModal from "./ProductModal.js";

class ProductDisplay extends React.Component {
  componentDidMount = () => {
    this.props.fetchProducts();
  };

  openModal = product => {
   this.props.openModal(product);
  };

  closeModal = () => {
    this.props.closeModal();
  };

  displayProducts = () => {
    if (this.props.products) {
      for (const key of Object.keys(this.props.products)) {
        this.props.products[key].key = key;
      }
    }

    return _.map(this.props.products, product => {
      return (
        <Product
          key={product.key}
          product={product}
          openModal={this.openModal}
        />
      );
    });
  };

  render() {
    return <div className="container">
      <div className="justify-content-center row">{this.displayProducts()}</div>
      <ProductModal
        modalIsOpen={this.props.modalIsOpen}
        selectedProduct={this.props.selectedProduct}
        onRequestClose={this.closeModal}
      />
    </div>;
  }
}
function mapStateToProps(state) {
  return {
    products: state.displayProducts,
    selectedProduct: state.modal.selectedProduct,
    modalIsOpen: state.modal.modalIsOpen
  };
}
export default connect(mapStateToProps, Actions)(ProductDisplay);
