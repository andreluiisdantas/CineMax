import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MovieHighlights.css'

interface Movie{
    nome: string;
    genero: string;
    ano: number;
    diretor: string;
    sinopse: string;
    imagem: string;
}

const MovieHighlights: React.FC = () => {
    return(

    )
}

export default MovieHighlights