import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

export default LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    console.log("in fetching");
       return (
          promiseInProgress && 
          <div
            style={{
            width: "100%",
            height: "100",
            display: "flex",      
            justifyContent: "center",
            alignItems: "center"     }}   >    
         <Loader type="Plane" color="#2BAD60" height="100" width="100" />   
         </div>
      );  
}
