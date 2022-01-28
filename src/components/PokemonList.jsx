import React from 'react';
import { ContainerImgCard } from './ContainerImgCard';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { SingleOut } from '../redux/Actions/Actions';

export const PokemonList = ({name, image, species, dispImg1, dispImg2, id}) => {


  const dispatch = useDispatch()

  
  const navigate = useNavigate()

  const getPokemon = ( param )=>{
    
    dispatch(SingleOut(param))

    navigate(`/pokedex/pokemon/${name}`)

  }


  return (
      <div className='pokemon-card' id={species} onClick={()=>getPokemon(id)}>
        <span>
          <i className={species === 'grass' ? "fas fa-leaf" :
                          species === 'fire' ? "fas fa-fire" :
                          species === 'water' ? "fas fa-tint" :
                          species === 'rock' ? "fas fa-gem" :
                          species === 'fighting' ? "fas fa-universal-access" :
                          species === 'ground' ? "fas fa-mountain" :
                          species === 'bug' ? "fas fa-bug" :
                          species === 'psychic' ? "fas fa-brain" :
                          species === 'normal' ? "fas fa-wind" :
                          species === 'electric' ? "fas fa-bolt" :
                          species === 'poison' ? "fas fa-skull-crossbones" :
                          species === 'ghost' ? "fas fa-ghost" : ""}></i>
        </span>
        <h3>{name}</h3>
        <img src={image} alt="" />
        <ContainerImgCard 
          img1 = {dispImg1}
          img2 = {dispImg2}
        />
      </div>


  )
};