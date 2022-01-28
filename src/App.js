import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { Login } from './Views/Login'
import { Home } from './Views/Home'
import { PokemonTypeSelected } from './Views/PokemonTypeSelected'
import {FetchComponent} from "./FETCH-COMPONENT/FetchComponent"
import { SingledOutPokemon } from "./Views/SingleOutPokemon";

function App() {


  return (
   
    <BrowserRouter>
      <Routes>

          <Route path="/" element={ 
          
         <>
          <Login /> 
          <FetchComponent/></>
        }/>


          <Route element={ <ProtectedRoutes /> }>

              <Route path="/pokedex" element={ <Home /> }/>
              <Route path="/pokedex/type/:type" element={ <PokemonTypeSelected /> }/>
              <Route path="/pokedex/pokemon/:name" element={ <SingledOutPokemon /> }/>

          </Route>


      </Routes>
    </BrowserRouter>

  );
}

export default App;