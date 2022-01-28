import React from "react";


export const Stats = ({ ability, integer,species })=>{
    const reFact = integer <= 25 ? 35 : integer > 100 ? 100 : integer
    const margin = 100 - reFact
    const marginTotal = `${margin}%`
   


    const icons = [
        {
            icon:"fas fa-heartbeat",
            id: 1
        },
        {
            icon:"fas fa-fighter-jet",
            id: 2
        },
        {
            icon:"fas fa-shield-alt",
            id: 3
        },
        {
            icon:"fas fa-chess-knight",
            id: 4
        },
        {
            icon:"fas fa-shield-virus",
            id: 5
        },
        {
            icon:"fas fa-tachometer-alt",
            id: 6
        }
        
    ]

    return(

        <div className="contain-stat">
            <article style={{marginRight: marginTotal}} id={species}>   
            <p>{ability === "hp" ? "Health Power" : ability} : {reFact}%</p>
            {/* <p><i className={ability === "hp" ? "fas fa-heartbeat" :
                 ability === "attack" ? "fas fa-chess-knight" :
                 ability === "defense" ? "fas fa-shield-alt" :
                 ability === "special-attack" ? "fas fa-fighter-jet" :
                 ability === "special-defense" ? "fas fa-shield-virus" : "fas fa-tachometer-alt"}>
                </i>
                
            </p>  */}
                <div className="bright" ></div>
            </article>
        </div>
    )
}