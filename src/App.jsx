import Navbar from "./components/Navbar";
import Location from "./components/Location";
import data from "./data";


export default function App() {

  let places = data.map(place => {
    return (
      <Location 
        key={place.id}
        {...place}
      />
    )
  })
  
  return (
    <>
      <Navbar />
      <div className="container">
        {places}
      </div>
    </>
  )
}