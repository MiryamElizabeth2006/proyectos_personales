import React from 'react';
import '../stylesheets/testimonio.css';
export function Testimonio(props){
  return(
    <div className ='container-pikachu'>
      <img class Name  = 'image-pikachu'
      src = {require(`../assets/poke-${props.imagen}.png`)}
      alt = 'Img of pikachu'/>
      <div className = 'container-text'>
        <p className = 'name-picture'>{props.nombre} de pockemon go</p>
        <p className = 'power-pikachu'>{props.power}</p>
        <p className= 'text-especific-pikachu'>{props.descripcion}</p>
      </div>    
    </div>
  );
}
