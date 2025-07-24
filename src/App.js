import { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import axios from "axios";

import Cards from "./Components/Cards";
import Filter from "./Components/Filters";
import Navbar from "./Components/Navbar";

const App = () => {
  
  const [courses, setCourses] = useState('');

  // fetchData
  const fetchData = async () => {
    try {
      const fetchData = await axios.get(apiUrl);
      console.log(fetchData.data.data);
      setCourses(fetchData.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Filter filterData={filterData}  />

      <Cards courses={courses} />
    </div>
  );
};

export default App;
