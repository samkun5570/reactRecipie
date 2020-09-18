import React from 'react';
// import Style from './recepie.css'
import './recepie.css'
const recepie = ({title,calories,img,ingredients}) =>{
    return(
        <div className="recepie">
            <h1>{title}</h1>
            <img src = {img} alt = "image of recepi" className="img"></img>
            <p>Calories : {calories}</p>
            <ol>
                {
                    ingredients.map(items=>(
                        <li>{items.text}</li>
                    )
                )}
            </ol>
        </div>
    )
};
export default recepie;

