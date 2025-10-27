import React from "react";
import './Home.css'
import Navbar from "../../Components/Navbar/Navbar";


const HomePage: React.FC = () => {
    return(
        <div className="homePageContainer">
            <Navbar/>
        </div>
    )
};

export default HomePage;