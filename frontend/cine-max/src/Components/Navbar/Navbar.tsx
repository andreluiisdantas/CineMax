import React from "react";
import './Navbar.css'
import MainButton from "../MainButton/MainButton";
import SecundaryButton from "../SecundaryButton/SecundaryButton";
import UserButton from "../UserButton/UserButton";
import SearchBar from "../SeachBar/SearchBar";

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
                <UserButton/>
            </div>
        </div>
        
    )
}

export default Navbar