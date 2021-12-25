import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,price,stock,seller} = props.product;
    const  {addProduct} = props;

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>

            <div className="product-detail">
                <h4>{name}</h4> 
                 <p>By: <span>{seller}</span></p>
                 <p>${price}</p>
                 <p>Only <span>{stock}</span> in stock</p>  
                 <button className="main-button" onClick={() => addProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;