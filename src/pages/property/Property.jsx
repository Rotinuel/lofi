import { useParams } from "react-router-dom"
import "./Property.css"
import { amenities, properties, propertyImages } from "../../data"
import Navbar from "../../components/navbar/Navbar"
import { LuBedDouble } from "react-icons/lu"
import { PiBathtub } from "react-icons/pi"
import { BiArea } from "react-icons/bi"

const Property = () => {
    
    const {id} = useParams()
    const property = properties.find((property) => property.id === parseInt(id))

    console.log("Searching for property with id:", id);


    return ( 
        <div>
            <Navbar style={{backgroundColor: "rgba(8, 22, 55, 0.9)"}}/>
            <div className="property-container">
                <div className="property-wrapper">
                    <h1 className="property-heading">
                        {property.type} for {property.title} in {property.address}
                    </h1>
                    <div className="property-images">
                        <div className="main-image">
                            <img src={propertyImages[0].image  } alt="" />
                        </div>
                        <div className="small-images">
                            {propertyImages.slice(1).map((image, index) => (
                                <img key={index} src={image.image} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="property-details">
                        <h1>
                            {property.price}
                        </h1>
                        <div className="property-rooms">
                            <span>
                                <LuBedDouble className="icon" />
                                <p>{property.bedrooms} Bedrooms</p>
                            </span>
                            <span>
                               <PiBathtub className="icon"/>
                               <p>{property.bathrooms}Bathrooms</p>
                            </span>
                            <span>
                               <p><BiArea className="icon"/>{property.size} (sqm)</p>
                            </span>
                        </div>
                    </div>
                    <div className="property-amenities"> 
                        <h1>Amenities</h1>
                        <div className="amenities">
                            {amenities.map((item) => (
                                <div key={item.id} className="amenity">
                                    <span className="icon">{item.icon}</span>
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property