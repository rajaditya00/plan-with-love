import React,{useState} from "react";
import data from './data'
import Tours from './components/Tours';

const App = () => {

const[tours,setTours] = useState(data)

 

function removeTour(id){
  const newTours =tours.filter(tour => tour.id !==id)
  setTours(newTours)    
}

function addTours(id) {
  // Find the tour with the matching ID
  const selectedTour = data.find((tour) => tour.id === id);

  if (selectedTour) {
    // Update the state to add the selected tour
    setTours((prevTours) => [...prevTours, selectedTour]);
  }
}


if(tours.length === 0){
  return(
    <div className="refresh">
      <h4>No Tour Left</h4>
      <button className="btn-white" onClick={() => setTours(data)}>
        Refresh
      </button>

    </div>
  );
}

  return  (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} addTours={addTours}/> 
    </div>
  )
};

export default App;
