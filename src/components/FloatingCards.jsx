import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { SingleOut } from '../redux/Actions/Actions';


export const FloatingCards = ({ id, name, species, avatar }) => {

  const dispatch = useDispatch()

  
  const navigate = useNavigate()

  const getPokemon = ( param )=>{
    
    dispatch(SingleOut(param))

    navigate(`/pokedex/pokemon/${name}`)

  }


  return (
    
      <article className="card" id={species}>
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
                          species === 'ghost' ? "fas fa-ghost" : 
                          species === 'dragon' ? "fas fa-dragon" : 
                          species === 'ice' ? "fas fa-snowflake" : ""}></i>
        </span>
          <aside id='pokemon-avatar'>
            <img src={avatar} alt="" /> 
          </aside>
          <aside id='pokemon-description'>
                <h4>{name}</h4>
                <h4>{species}</h4>
                <button className={species} onClick={()=>getPokemon(id)}> Go </button>
          </aside>
      </article>
  );

};