import React from 'react';
import Tilt from 'react-parallax-tilt';
// import Style from './recepie.css'
import './recepie.css'
const recepie = ({title,calories,img,ingredients}) =>{
    return(
        <article className="recepie">
            <header className="card-header">{title}</header>
            <Tilt>
            <img src = {img} alt=" " className="imgClass"></img>
            </Tilt>
            <p>Calories : {calories.toFixed(0)}</p>
            <ol className="ingrediants">
                {
                    ingredients.map(items=>(
                        
                        <li key={items.className}>
                        {items.text}
                        </li>
                    )
                )}
            </ol>
        </article>
    )
};
export default recepie;

