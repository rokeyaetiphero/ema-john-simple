import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
//shop.js theke handleAddProduct function r fakedata r product glo ekta ekta single product props hisebe pathano hyece.evbe ektar por ekta product component create hye fakedata y thaka shobgulo product product.js e show korbe..trpor icchamoto add to cart button e click kore add koro
    const {img,name,seller,price,stock,key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
        {/* product r name k link kore dewa hyece..route parameter r path e giye reviewitem ba puro item show korbe */}
    <h4 className='product-name'><Link to={'/product/'+key}>{name}</Link></h4>
                <br />
                <p><small>By: {seller} </small></p>
                 <p>$Price:{price}</p>
                <br/>
                <p>Only {stock} left in stock --Order Soon</p>
                { props.showAddToCart === true && <button 
                 className='main-button'
                 onClick={()=>props.handleAddProduct(props.product)}>
                     <FontAwesomeIcon icon={faShoppingCart}/>Add To Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;