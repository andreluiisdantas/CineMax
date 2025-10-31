import React from "react";
import './Home.css'
import Navbar from "../../Components/layout/Navbar/Navbar";
import SecundaryButton from "../../Components/ui/SecundaryButton/SecundaryButton";
import MainButton from "../../Components/ui/MainButton/MainButton";
import TrailerCarousel from "../../Components/features/TrailerCarousel/TrailerCarousel";
import MovieHighlights from "../../Components/features/MovieHighlights/MovieHighlights";


const HomePage: React.FC = () => {
    return(
        <main className="homePageContainer">
            <Navbar/>
            <div className="homePageTitleContainer">
                <div className="homePageTitle">
                    <h1>Filmes sem Limites</h1>
                    <h2>Sua jornada pelo mundo dos filmes começa aqui, descubra histórias que vão emocionar você.</h2>
                </div>
                <div className="titleButtons">
                    <MainButton label="Ver filmes"/>
                    <SecundaryButton label="Em alta"/>
                </div>
            </div>
            <TrailerCarousel/>
            <MovieHighlights/>
        </main>
    )
};

export default HomePage;