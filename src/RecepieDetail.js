import React from 'react';
import Tilt from 'react-parallax-tilt';
// import Style from './recepie.css'
import './RecepieDetail.css'
const RecepieDetail = ({title,calories,img,ingredients,url,healthLabels,digest,totalTime,closedetail}) =>{
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
export default RecepieDetail;