import { useState } from "react";
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData,setToursData]=useState(tours);
  const removeTour=(id)=>{
    const newTours=toursData.filter((tour)=>tour.id!==id);
    setToursData(newTours);
  }
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return (
            <div key={tour.id}>
              <Tour {...tour}/>
              <button 
                onClick={()=>removeTour(tour.id)}
                className="btn"
              >
                Not Interested
              </button>

            </div>
          )
        })}
      </div>
    </section>
  );
};
export default Tours;
