import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { filterData, apiUrl } from "./data";
import Cards from "./Components/Cards";
import Filter from "./Components/Filters";
import Navbar from "./Components/Navbar";
import CourseSkeleton from "./Components/CourseSkeleton";

const App = () => {
  
  const [courses, setCourses] = useState('');
  const [loading, setLoading] = useState(true);

  // fetchData
  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchData = await axios.get(apiUrl);
      console.log(fetchData.data.data);
      setCourses(fetchData.data.data);
    } catch (error) {
      toast.error("Network error");
      console.log(error);
      throw error;
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      
      <div>
        <Filter filterData={filterData} />
      </div>

      <div>
        {
          loading ? (<CourseSkeleton />) : (<Cards courses={courses} />)
        }
      </div>


    </div>
  );
};

export default App;
