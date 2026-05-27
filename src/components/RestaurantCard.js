
const ResturantCard = (props) => {
        const {resData} = props;
        const {
          cloudinaryImageId,
          name,
          cuisines,
          avgRating,
          costForTwo
        } = resData?.info;
        return (
            <div className="m-4 p-4 w-[200px] rounded-lg hover-lg bg-gray-100 hover:bg-gray-200">
                <img className="rounded-lg" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId} />
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo} FOR TWO</h4>
                {/* <h4>{resData.info.sla.deliveryTime} 38 minutes</h4> */}
            </div>  
        )   
    }
export default ResturantCard;
