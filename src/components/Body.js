    import ResturantCard, {withPromotedLabel} from './RestaurantCard';
    import { useEffect, useState } from 'react';
    import Shimmer from './Shimmer';
    import { Link } from 'react-router-dom';
    import useOnlineStatus from '../utils/useOnlineStatus';
    
    const Body = () => {
        const [listOfRestaurants, setListOfRestaurants] = useState([]);
        const [filteredRestaurant, setFilteredRestaurant] = useState([]);
        const [searchText, setSearchText] = useState("");
        const RestuarantCardPromoted = withPromotedLabel(ResturantCard);

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
                        <div className="filter flex">
                        <div className="search m-4 p-4">
                            <input type="text" className="border border-solid border-black rounded-lg" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
                            <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={searchFilter}>Search</button>
                        </div>
                        <div className="search m-4 p-4 flex items-center">
                        <button className="px-4 py-2 bg-gray-100 rounded-lg" 
                        onClick={()=> {
                            const filteredList = listOfRestaurants.filter(
                                (res)=> res.info.avgRating > 3.5)
                                console.log("Filtered: ", filteredList)
                                setFilteredRestaurant(filteredList)
                        }}>Top Rated Restuarants</button>
                        </div>
                        </div>
                        <div className="flex flex-wrap">
                            {filteredRestaurant.map((restaurant)=> (
                                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                    {
                                        restaurant.info.isOpen ? <RestuarantCardPromoted resData={restaurant} /> : <ResturantCard resData={restaurant} /> 
                                    }
                                    <ResturantCard resData={restaurant} />
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            }
    export default Body;    
