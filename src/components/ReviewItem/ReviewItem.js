import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product;// niche button e single product r key use kora hyece.Review.js thke cart hte map kora single product gulo ei line destructure kora hyece
    const reviewItemStyle = {
       borderBottom: '1px solid lightgray',
       marginBottom: '5 px',
       paddingBottom: '5 px',
       marginLeft: '200 px'
    };

    return (
        <div className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;