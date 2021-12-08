import React from "react";
import Tour from "./Tour";

const Tours = ({ data, removeTour }) => {
  console.log(data);
  return (
    <section>
      <div id="tour">
        {data.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
