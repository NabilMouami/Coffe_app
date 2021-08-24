import React from 'react'
import "./Product.css"
import { connect } from "react-redux";

import { Link } from 'react-router-dom';
import {
  loadCurrentItem, addToCart
} from "../../../redux/Shopping/shopping-actions";
export const Product = ({product, loadCurrentItem, addToCart}) => {
    return (
        <div className="product">
            <img src={product.imageUrl} alt=""/>
            <div className="product__info">
                <p className="info__name">Boisson {product.id}</p>
                <p className="info__description">
                  {product.description}
                </p>
                <p className="info__price">${product.price}</p>
                <Link to={`/product/${product.id}`} className="info__button"onClick={() => loadCurrentItem(product)}>View</Link>
                <button className="info__button" onClick={() => addToCart(product.id)}>Add To Cart</button>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
