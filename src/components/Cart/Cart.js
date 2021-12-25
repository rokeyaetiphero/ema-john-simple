import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd)=> total + prd.price , 0 );

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price; 
    // }
   const tax = Math.round(total/10);
   let shipping = 0;

   if(total> 35){
       shipping = 0;
   }
   else{
       shipping = 4.99;
   }

    return (
        <div>
            <h2>This is Cart</h2>
            <h4>Product Price: {total} </h4>
            <h4>Total Products {cart.length}</h4>
            <h4>Shipping Cost : {shipping}</h4>
            <h5>TAX + VAT: {tax}</h5>
            <h4>Total Price : {total+tax}</h4>
        </div>
    );
};

export default Cart;