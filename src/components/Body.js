    import ResturantCard from './RestaurantCard';
    import { useEffect, useState } from 'react';
    import Shimmer from './Shimmer';
    import { Link } from 'react-router-dom';
    import useOnlineStatus from '../utils/useOnlineStatus';

    const Body = () => {
        const [listOfRestaurants, setListOfRestaurants] = useState([]);
        const [filteredRestaurant, setFilteredRestaurant] = useState([]);
        const [searchText, setSearchText] = useState("");
        const onlineStatus = useOnlineStatus();
        useEffect(()=> {
            fetchData();
        }, []);
        
        const fetchData = async () => {
            const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );            const json = await data.json();
            console.log("data:", json);
            const restaurantData =
            json?.data?.cards?.find((card) =>
                card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setListOfRestaurants(restaurantData)
            setFilteredRestaurant(restaurantData)
        }

        const searchFilter = () => {
            const filtered = listOfRestaurants.filter((item)=> 
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilteredRestaurant(filtered)
        }

        if(onlineStatus === false){
            return (
                <h1>Look like you're offline!! Please check your internet connection;</h1>
            )
        }
        return !listOfRestaurants || listOfRestaurants.length === 0 ? (
            <Shimmer />
        ) : (
                    <div className="body">
                        <div className="filter">
                        <div className="search">
                            <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
                            <button onClick={searchFilter}>Search</button>
                        </div>
                        <button className="filter-btn" 
                        onClick={()=> {
                            const filteredList = listOfRestaurants.filter(
                                (res)=> res.info.avgRating > 3.5)
                                console.log("Filtered: ", filteredList)
                                setFilteredRestaurant(filteredList)
                        }}>Top Rated</button>
                        </div>
                        <div className="res-container">
                            {filteredRestaurant.map((restaurant)=> (
                                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><ResturantCard resData={restaurant} /></Link>
                            ))}
                        </div>
                    </div>
                )
            }
    export default Body;    
