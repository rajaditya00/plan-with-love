import Cards from './Cards';
import React from 'react';


function Tours({tours, removeTour,addTours}){
    return(
      <div className="container">
         <div>
            <h2 className="title">Plan With Love</h2>
         </div>
          
         <div className="cards">
            {
               tours.map((tour)=>{
                return <Cards key={tour.id} {...tour} removeTour={removeTour} addTours={addTours}></Cards>
               }) 
            }
         </div>
      </div>

    );

}

export default Tours;