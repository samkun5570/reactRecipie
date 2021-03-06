import React from 'react';
import Tilt from 'react-parallax-tilt';
// import Style from './recepie.css'
import './recepie.css'
const recepie = ({title,calories,img,ingredients,url,healthLabels,digest,totalTime}) =>{
    return(
        <article className="recepie">
            <header className="card-header">{title}</header>
            <Tilt>
            <img src = {img} alt=" " className="imgClass"></img>
            </Tilt>
            <pr>Calories : {calories.toFixed(0)}  Time : {totalTime}</pr>
          <pr><a href={url} style={{padding:"5px"}}>Source</a></pr>
            {
                healthLabels.map(label=>(
                        
                        <pr key={label}>
                        {label}
                        </pr>
                    )
                )
                }
           
          
            <ul className="ingrediants">
                {
                    ingredients.map(items=>(
                        
                        <li key={items}>
                        {items.text}
                        </li>
                    )
                )
                }
            </ul>
        </article>
    )
};
export default recepie;

