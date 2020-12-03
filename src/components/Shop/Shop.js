import React, { useEffect }  from 'react';
import {useState} from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
 
const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products,setproducts] = useState(first10);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();//database thke data load kora..savedCart ekta object
        const productKeys = Object.keys(savedCart);//load howa object thke key alada kora//array hisebe key gulo dcce
        const previousCart = productKeys.map(existingKey =>{//21 num line e pass kora hcce savedCart e existingkey.
          const product = fakeData.find(pd => pd.key === existingKey);//fakeData thke existingkey wala product khuje ber kora
          product.quantity = savedCart[existingKey];//oi j key pass kore quantity add kora
          return product;
        })
        setCart(previousCart);
    },[])

    const handleAddProduct = (product)=>{//parameter holo j product e click kra hcche
        const toBeAddedkey = product.key;//click kra product r key ta amra add krte jacchi
        const sameProduct = cart.find(pd => pd.key === toBeAddedkey);//key mile gele product r value ta sameproduct e add hbe..na mille undefined hbe
        let count = 1;//same product na thkle count 1
        let newCart;
        if(sameProduct){//product ta jdi thke thake thle body te dhkbe
           count = sameProduct.quantity + 1;//product same find kre pele quantity 1 add hbe
          sameProduct.quantity = count;//new count amra quantity r value hisebe product r feature e add kore dilam
          const others = cart.filter(pd => pd.key !== toBeAddedkey);//cart e already thaka product gulor sathe je product gulor key ekbarer beshi milbe na ,like egulo single e ache
          newCart = [...others,sameProduct];
        }
        else{//jdi if false hy ,like same product na thake
            product.quantity = 1;//same product na thkle prretktir quantity 1
            newCart = [...cart,product];//then cart r sathe shudhu product ta add kre daw..jhtu same nai
        }
        
        setCart(newCart);//setcart diye noya product add hye jcche cart e
        addToDatabaseCart(product.key ,count);//ekhane key gulor sthe ekta quantity achee
    }
 
    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    products.map(pd =><Product 
                        showAddToCart={true}
                        key={pd.key}
                        handleAddProduct = {handleAddProduct}
                        product={pd}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                <Link to='/review'>
           <button className='main-button'>Review Order</button>
               </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;