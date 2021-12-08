import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
let url = "http://localhost:3000/tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => getData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours data={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
