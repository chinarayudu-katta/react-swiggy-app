import ResturantCard from './RestaurantCard';
import resObj from '../utils/mockData';

const Body = () => {
        return (
                <div className="body">
                    <div className="search">Search</div>
                    <div className="res-container">
                        {resObj.data.map((restaurant, index)=> (
                            <ResturantCard key={index} resData={restaurant} />
                        ))}
                    </div>
                </div>
            )
        }
export default Body;    
