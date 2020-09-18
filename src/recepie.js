import React from 'react';
import Style from './recepie.css'
const recepie = ({title,calories,img,ingredients}) =>{
    return(
        <div className={Style.recepie}>
            <h1>{title}</h1>
            <img src ={img}alt = "image of recepi"></img>
            <p>{calories}</p>
            <ol>
                {
                    ingredients.map(items=>(
                        <li>{items.text}</li>
                    )
                )};
            </ol>
        </div>
    )
};
export default recepie;

