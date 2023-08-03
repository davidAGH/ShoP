import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import headphones1 from '../assets/images/headphones1.jpg'
import headphones2 from '../assets/images/headphones2.jpg'
import headphones3 from '../assets/images/headphones3.webp'
import headphones4 from '../assets/images/headphones4.jpg'

export const Shop = memo(({ maxLimit }) => {
    const [list, setList] = useState([
        { id: 1, image: headphones1, name: 'Gray Headphone', price: '$30', limit: 0 },
        { id: 2, image: headphones2, name: 'Purple Headphone', price: '$45', limit: 0 },
        { id: 3, image: headphones3, name: 'Green Headphone', price: '$56', limit: 0 },
        { id: 4, image: headphones4, name: 'Black Headphone', price: '$62', limit: 0 },
    ]);

    const handleIncrement = (itemId) => {
        setList(prevList => prevList.map(item => {
            if (item.id === itemId && item.limit < maxLimit) {
                return { ...item, limit: item.limit + 1 };
            }
            return item;
        }));
    };

    const handleDecrement = (itemId) => {
        setList(prevList => prevList.map(item => {
            if (item.id === itemId && item.limit > 0) {
                return { ...item, limit: item.limit - 1 };
            }
            return item;
        }));
    };

    return (
        <div className='container'>
            <div className='content'>
                <h1>My oFFline Shop</h1>
                <div className='headphones'>
                    {list.map(item => (
                        <div key={item.id} className='imgStyle'>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>Price: {item.price}</p>
                            <div className='buttons'>
                                <p>Limit: {item.limit}</p>
                                <button className='increment-button' onClick={() => handleIncrement(item.id)}>+</button>
                                <button className='decrement-button' onClick={() => handleDecrement(item.id)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) 
})

Shop.propTypes = {
    maxLimit: PropTypes.number.isRequired,
}




