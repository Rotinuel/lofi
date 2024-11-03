import { FaLocationDot } from "react-icons/fa6"
import "./Hero.css"
import { filterOptions } from "../../data"
import { FaChevronCircleDown } from "react-icons/fa"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Hero = ({style}) => {
    const [activeButton, setActiveButton] = useState("Buy")
    const [openFilter, setOpenFilter] = useState(null)
    const [selectedOptions, setSelectedOptions] = useState(
        filterOptions.map((filter) => filter.options[0])
    )
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType)
    };

    const handleFilterClick = (index) => {
        setOpenFilter(openFilter === index ? null : index)
    };
    
    const handleOptionSelect = (filterIndex, option) => {
        const updatedOptions = [...selectedOptions]
        updatedOptions[filterIndex] = option
        setSelectedOptions(updatedOptions)
        setOpenFilter(null)
    };

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/properties");
    }
    

  return (
    <div className="hero" style={style}>
        <div className="hero-container">
            <h1>Find Your Perfect Home</h1>
            <p>Making Your Home Search Easy and Enjoyable</p>

            <div className="buttons-container">
                <button className={activeButton === "buy" ? "active" : ""} onClick={()=> handleButtonClick("buy")}>Buy Properties</button>
                <button className={activeButton === "rent" ? "active" : ""} onClick={()=> handleButtonClick("rent")}>Rent Properties</button>
            </div>

            <div className="hero-search-container">
                <div className="hero-search">
                    <div className="hero-wrapper">
                        <div className="filter">
                            <div className="filter-container">
                                <div className="filter-content">
                                    <label>Location</label>
                                    <div className="input-container">
                                        <FaLocationDot />
                                        <input placeholder="Search Location" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                    {filterOptions.slice(0 ,2).map((filter, index) => (
                        <div key={index} className="filter">
                            <div className="filter-container">
                                <div className="filter-content">
                                    <label>{filter.title}</label>
                                    <div className="input-container" onClick={() => handleFilterClick(index)}>
                                        <FaChevronCircleDown />
                                        <span>{selectedOptions[index]}</span>
                                    </div>
                                    {openFilter === index && (
                                        <div className="options">
                                            {filter.options.map((option) => (
                                                <label key={option} className="option-item" onClick={()=> handleOptionSelect(index, option)}>
                                                    <span>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="search" onClick={()=> handleNavigate()}>
                        <div className="search-container">
                            <div className="search-content">
                                <label>Search</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero