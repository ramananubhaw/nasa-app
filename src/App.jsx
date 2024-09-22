import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {

  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Main handleToggleModal={handleToggleModal} showModal={showModal} />
      {showModal && (<SideBar handleToggleModal={handleToggleModal} showModal={showModal} />)}
      <Footer showModal={showModal} handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
