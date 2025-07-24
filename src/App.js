import { useState } from "react";
import { filterData, apiUrl } from "./data";
import Cards from "./Components/Cards";
import Filter from "./Components/Filters";
import Navbar from "./Components/Navbar";

const App = () => {

  return (
    <div className="App">
      <Navbar />

      <Filter filterData={filterData}  />

      <Cards />
    </div>
  );
};

export default App;
