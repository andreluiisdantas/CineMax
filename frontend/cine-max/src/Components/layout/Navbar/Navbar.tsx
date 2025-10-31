import React from "react";
import './Navbar.css'
import MainButton from "../../ui/MainButton/MainButton";
import SecundaryButton from "../../ui/SecundaryButton/SecundaryButton";
import SearchBar from "../../ui/SeachBar/SearchBar";
import CircleButton from "../../ui/CircleButton/CircleButton";

const Navbar: React.FC = () => {

    const moviesSearch = (searchQuery: string) => {
    console.log("Searching for ACTORS:", searchQuery);
    
    };

    return(
        <div className="navbarContainer">
            <div className="logoContainer">
                <h1>LOGO</h1>
            </div>
            <div className="buttonsContainer">
                <SearchBar placeholder="Buscar filmes..." onSearchSubmit={moviesSearch}/>
                <SecundaryButton label="Contato"/>
                <MainButton label="Cadastrar filme"/>
                <CircleButton><i className="bi bi-person-fill"></i></CircleButton>
            </div>
        </div>
        
    )
}

export default Navbar