import React from 'react';
// import Style from './recepie.css'
import './recepie.css'
const recepie = ({title,calories,img,ingredients}) =>{
    return(
        <article className="recepie">
            <header className="card-header">{title}</header>
            <img src = {img} alt=" " className="img"></img>
            <p>Calories : {calories.toFixed(0)}</p>
            <ol className="ingrediants">
                {
                    ingredients.map(items=>(
                        <li>
                        {items.text}
                        </li>
                    )
                )}
            </ol>
        </article>
    )
};
export default recepie;

