import React from 'react'
import './Products.css'
import  Product  from './Product/Product'
import { connect } from "react-redux";

// Components
export const Products = ({ products }) => {
    
    
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {products.map(product => (
                  <Product key={product.id} product={product}/>
                ))
                }
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };
  
export default connect(mapStateToProps)(Products);
