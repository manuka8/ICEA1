
import '../assets/CSS/layout.css';
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import { flowers } from './FlowerDB';

export default function Products(){
    const [quantity, setQuantity] = useState(0);
    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(flower, quantity);
            setQuantity(0); 
        }
    };
    const addToCart = (flower, quantity) => {
        setCartItems(prevCartItems => {
            const existingItem = prevCartItems.find(item => item.id === flower.id);
            if (existingItem) {
                return prevCartItems.map(item =>
                    item.id === flower.id
                        ? { ...item, qty: item.qty + quantity }
                        : item
                );
            } else {
                return [...prevCartItems, { ...flower, qty: quantity }];
            }
        });
    };
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {flowers.map(flower => (
                        <Product key={flower.id} flower={flower} addToCart={addToCart} />
                    ))}
                </div>

            </div>
            <div className="item3">
                {
                <Cart cartItems={cartItems} />
                }
            </div>
        </>
    );

}