import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MovieHighlights.css';
import CircleButton from '../CircleButton/CircleButton';
import HightlightsDetails from '../HightlightsDetails/HightlightsDetails';
import MainButton from '../MainButton/MainButton';

interface Movie {
  id: number;
  nome: string;
  genero: string;
  ano: string;
  diretor: string;
  sinopse: string;
  imagem: string;
}

type SelectButton = 'Infos' | 'Sinopse';

const listMovies: Movie[] = [
  {
    id: 1,
    nome: 'A Origem',
    genero: 'Ficção Científica',
    ano: '2010',
    diretor: 'Christopher Nolan',
    sinopse:
      'Um ladrão que rouba informações entrando nos sonhos de suas vítimas é encarregado de uma tarefa impossível: plantar uma ideia na mente de um alvo.',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg',
  },
  {
    id: 2,
    nome: 'Matrix',
    genero: 'Ficção Científica',
    ano: '1999',
    diretor: 'Lana Wachowski, Lilly Wachowski',
    sinopse:
      'Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro. Em todas essas ocasiões, acorda gritando no exato momento em que os eletrodos estão para penetrar em seu cérebro.',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg',
  },
  {
    id: 3,
    nome: 'Pulp Fiction: Tempo de Violência',
    genero: 'Crime',
    ano: '1994',
    diretor: 'Quentin Tarantino',
    sinopse:
      'As vidas de dois assassinos da máfia, um boxeador, a esposa de um gângster e um casal de assaltantes se entrelaçam em quatro contos de violência e redenção.',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg',
  },
];

const MovieHighlights: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [selected, setSelected] = useState<SelectButton>('Infos');

  const handleSelect = (id: SelectButton) => {
    setSelected(id);
  };

  return (
    <main className="movieHighlights">
      <h1>Destaques</h1>
      <div className="movieHighlightSlider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
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
          {listMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="movieSlide">
                <div className="movieBanner">
                  <img src={movie.imagem} alt={movie.nome} />
                </div>
                <div className="movieInformations">
                  <div className='informationButtons'>
                    <button onClick={() => handleSelect('Infos')} className={`button ${selected === 'Infos' ? 'active' : 'inactive'}`}>Detalhes filme</button>
                    <button onClick={() => handleSelect('Sinopse')} className={`button ${selected === 'Sinopse' ? 'active' : 'inactive'}`}>Sinopse filme</button>
                  </div>
                  <div className='informationsContainer'>
                    {selected === 'Infos' ? (
                        <>
                          <HightlightsDetails title='Nome' information={movie.nome}/>
                          <HightlightsDetails title='Gênero' information={movie.genero}/>
                          <HightlightsDetails title='Ano' information={movie.ano}/>
                          <HightlightsDetails title='Diretor' information={movie.diretor}/>
                        </>
                      ) : (
                        <>
                          <HightlightsDetails title='Sinopse' information={movie.sinopse}/>
                        </>
                      )}
                  </div>
                  <MainButton label="Ver detalhes"/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <CircleButton className="trailerPrevButon">
          <i className="bi bi-chevron-compact-left"></i>
        </CircleButton>
        <CircleButton className="trailerNextButton">
          <i className="bi bi-chevron-compact-right"></i>
        </CircleButton>
      </div>
    </main>
  );
};

export default MovieHighlights;
