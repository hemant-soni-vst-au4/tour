import React, { useState, useEffect } from "react";
import Loading from './Loading';
import Tours from './Tours'
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])
  const fetchTours = async () => {
    setLoading(true)
    const response = await fetch(url);
    const tour = await response.json();
    console.log(tour)
  }
  useEffect(() => {
   fetchTours();
  }, [])

  if (loading) {
  return (
    <div>
      <Loading />
    </div>
  );
}
return ( <main>
  <Tours />
</main>
)
};

export default App;
