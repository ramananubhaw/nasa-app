import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  function handleToggleModal() {
    setShowModal(!showModal);
  }
  
  useEffect(() => {
    async function fetchAPIData() {
      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;
      try {
        const cachedData = localStorage.getItem(localKey);
        if (!cachedData) {
          localStorage.clear();
          const NASA_APOD_API = import.meta.env.VITE_NASA_APOD_API;
          const response = await axios.get(NASA_APOD_API);
          const apiData = response.data;
          setData(apiData);
          localStorage.setItem(localKey, JSON.stringify(apiData));
          console.log('Fetched from API');
          // console.log(response);
          return;
        }
        const apiData = await JSON.parse(cachedData);
        setData(apiData);
        console.log('Fetched from cache');
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (<Main data={data} handleToggleModal={handleToggleModal} showModal={showModal} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && data && (<SideBar data={data} handleToggleModal={handleToggleModal} />)}
      {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)}
    </>
  )
}

export default App
