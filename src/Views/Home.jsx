import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';


import { FloatingCards } from '../components/FloatingCards';
import { Loader } from '../components/Loader';
import { FilterSelector, SearchAction } from '../redux/Actions/Actions'

export const Home = () => {

  const dispatch = useDispatch()
  const [ search, setSearch ] = useState('')
  const userInfo = useSelector( store => store.rootReducer.infoUser)
  const InitialData = useSelector( store => store.rootReducer.initialData)
  const navigate = useNavigate()

  const PokemonType = ( param )=>{
      dispatch( FilterSelector( param ) )
      navigate(`/pokedex/type/${param}`)
  }

  const handlerSearch = ( e ) =>{
    e.preventDefault()
    const refactored = search.trim().toLocaleLowerCase()

    if( InitialData.find( pokemon => pokemon.name === refactored) !== undefined ){
      dispatch( SearchAction(refactored) )
      navigate(`/pokedex/pokemon/${refactored}`)
    }else{
      navigate('/pokedex/error')
    }
  }

  return (

    <div className='container-home'>

        <form onSubmit={(e)=> handlerSearch(e)}>
              <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
             <button type='submit'><i className="fab fa-searchengin"></i></button>
        </form>

        <section className='container-avatar'>
            <ul>
              <div className='name'>
                <li>Name:</li>
                <li>{userInfo?.name}</li>
              </div>
              <div className='nick-name'>
                <li>Known as:</li>
                <li>{userInfo?.nickName}</li>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="" />
            </ul>
        </section>

        <ul>
          <li onClick = {()=> PokemonType('grass')}><i className="fas fa-leaf grass"></i></li>
          <li onClick = {()=> PokemonType('fire')}><i className="fas fa-fire fire"></i></li>
          <li onClick = {()=> PokemonType('water')}><i className="fas fa-tint water"></i></li>
          <li onClick = {()=> PokemonType('rock')}><i className="fas fa-gem rock"></i></li>
          <li onClick = {()=> PokemonType('fighting')}><i className="fas fa-universal-access fighting"></i></li>
          <li onClick = {()=> PokemonType('ground')}><i className="fas fa-mountain ground"></i></li>
          <li onClick = {()=> PokemonType('bug')}><i className="fas fa-bug bug"></i></li>
          <li onClick = {()=> PokemonType('psychic')}><i className="fas fa-brain psychic"></i></li>
          <li onClick = {()=> PokemonType('normal')}><i className="fas fa-wind normal"></i></li>
          <li onClick = {()=> PokemonType('electric')}><i className="fas fa-bolt electric"></i></li>
          <li onClick = {()=> PokemonType('poison')}><i className="fas fa-skull-crossbones poison"></i></li>
          <li onClick = {()=> PokemonType('ghost')}><i className="fas fa-ghost ghost"></i></li>
        </ul>
        
        <section className='main-container-cards'>
          {
            InitialData.length === 1?
            <Loader/>:
            <div className='container-cards'>
            {
              InitialData?.map(item =>
                <FloatingCards
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  species={item.types[0].type.name}
                  avatar={item.sprites.other.dream_world.front_default}
                />
              )
            }
          </div>
          }
        </section>


    </div>

  )

};