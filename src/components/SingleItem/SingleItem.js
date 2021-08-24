import React from "react";
import  "./SingleItem.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart}) => {
  return (
    <div className="singleItem">
      <img
        className="singleItem__image"
        src={current.imageUrl}
        alt=""
      />
      <div className="singleItem__details">
        <p className="styles.details__description">{current.description}</p>
        <p className="details__price">$ {current.price}</p>

        <button
          className="details__addBtn"
          onClick={() => addToCart(current.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
