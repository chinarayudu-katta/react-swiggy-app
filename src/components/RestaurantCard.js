
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
            <div className="res-card" style={{"backgroundColor": "#f0f0f0"}}>
                <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo} FOR TWO</h4>
                {/* <h4>{resData.info.sla.deliveryTime} 38 minutes</h4> */}
            </div>  
        )   
    }
export default ResturantCard;
