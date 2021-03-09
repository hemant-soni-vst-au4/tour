import React, { useState } from "react";
import Loading from './Loading'
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])
  if (loading) {
  return (
    <div>
      <Loading />
    </div>
  );
}
};

export default App;
