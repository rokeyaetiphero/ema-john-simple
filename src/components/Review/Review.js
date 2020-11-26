import React from 'react';
import {useEffect, useState} from 'react';
import {getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyimage from '../../images/giphy.gif';
const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false);//by default useState r value false

    const handlePlaceOrder = () =>{
        setCart([])//jkhn order place krbe cart ta k empty kre dibe
        setOrderPlaced(true);
        processOrder();//data base k ble dibe cart clean krte
    }

    const removeProduct = (productKey)=>{
     const newCart = cart.filter(pd => pd.key !== productKey);//productKey r sthe match na howa product gulo k alada kore newCart e rakho
     setCart(newCart);//seshmesh filter kora product gulo cart e add hye gelo
     removeFromDatabaseCart(productKey);//productKey use kore se local storage thke product ti remove kore dibe
    }

    useEffect(() =>{
        const savedCart = getDatabaseCart();//getDatabaseCart ekhne cart e add howa product gulo savedCart e assign krce
        const productKeys = Object.keys(savedCart);//savedCart ekhne ekti object
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);//cart e add howa key gulor sathe fakedata te thaka product r compare ..kra hcche
            product.quantity = savedCart[key];//cart e add hye jawa product gulor new property quantity add kra hcche..savedCart[key]=quantity
            return product;// product r value ta cartProducts variable e assign hcce
        });
        setCart(cartProducts);
    },[]);

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyimage} alt=""/>
    }

    return (
        <div className='twin-container'>
            <div className='product-container'>
            <h1>Cart Items Review:{cart.length}</h1>
            { 
              cart.map(pd => <ReviewItem removeProduct={removeProduct} product = {pd}></ReviewItem>)//cart e add howa shobgulo product show korar jnno pabar jnno map//
            }

            {thankyou}
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <button onClick={handlePlaceOrder} class='main-button'>Place order</button>
            </div>
        </div>
    );
};

export default Review;
//getDatabaseCart thke amra cart e add howa product gulor key gulo detect kore fakedata thke dhore niye ashbo.