import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const resInfo = useRestaurantMenu()
    
    if(resInfo === null) return <Shimmer />
    
    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = 
    resInfo?.cards[0]?.card?.card?.info || {};

    const itemCards =
        resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];    

    return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        <h4>{item.card.info.name}</h4>
                        <p>₹ {item.card.info.price / 100}</p>
                        <p>{item.card.info.description}</p>
                        <hr />
                    </li>
                ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu