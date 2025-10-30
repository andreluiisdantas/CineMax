import React, { useState } from "react"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TrailerCarousel.css'
import CircleButton from "../CircleButton/CircleButton";

interface Movie {
  id: number;
  title: string;
  subtitle: string;
  trailer_key: string; 
}

const listMovies: Movie[] = [
    { 
      id: 1, 
      title: 'Vingadores: Ultimato', 
      subtitle:'Após Thanos eliminar metade das criaturas vivas...', 
      trailer_key: 'spJoZReeIeQ'
    },
    { 
      id: 2, 
      title: 'Get Out', 
      subtitle:'Chris é um jovem fotógrafo negro...', 
      trailer_key: 'DzfpyUB60YY'
    },
];

const TrailerCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const getEmbedUrl = (key: string) => {
      return `https://www.youtube.com/embed/${key}?autoplay=1&mute=1`;
    }

    return(
      <div className="sliderContainer">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: '.trailerPrevButon', 
            nextEl: '.trailerNextButton', 
          }}
          
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {listMovies.map((movie, index) => {
            const isActive = (index === activeIndex);
            return (
              <SwiperSlide key={movie.id}>
                <div className="trailerSlide">
                  <div className="video"> 
                    <iframe
                      src={isActive ? getEmbedUrl(movie.trailer_key) : ''}
                      title={`${movie.title} Trailer`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="videoInformations">
                      <h3>{movie.title}</h3>
                      <p className="trailerSubtitle">{movie.subtitle}</p> 
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <CircleButton className="trailerPrevButon"><i className="bi bi-chevron-compact-left"></i></CircleButton>
        <CircleButton className="trailerNextButton"><i className="bi bi-chevron-compact-right"></i></CircleButton>
      </div>
    );
}; 

export default TrailerCarousel;