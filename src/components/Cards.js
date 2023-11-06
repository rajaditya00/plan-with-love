import {useState} from 'react';
// import React from 'react';




function Cards({id,name,image,info,price,removeTour,addTours}){

     
    
    const[readmore, setReadmore] = useState(false);
    const description = readmore ? info :`${info.substring(0,200)}....` ;
    function readmoreHandler(){
        setReadmore(!readmore)
    }
    
     
    
       return(
            <div className="card">
                {/* <img src={image} className="image" /> */}
                <img src={image} className="image" alt={name} ></img>

    
    
                  <div className="tour-info">
    
                  <div className="tour-detalis">
                    <h3 className="tour-price">₹{price}</h3>
                    <h3 className="tour-name">{name}</h3>
                </div>
    
                <div className="description"> 
                {description}
                <span className="read-more" onClick={readmoreHandler}>{readmore ? `Show Less` :` Show More`}</span>
                </div>
    
    
                  </div>
                  
                  <button className="btn-green" onClick={() =>addTours(id)}>
                     Accept
                 </button>
                
                 <button className="btn-red" onClick={() =>removeTour(id)}>
                    Not Interested
                 </button>
            </div>
    
       );
    
     }
    
     export default Cards;