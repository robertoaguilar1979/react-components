import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setisOpen] = useState(false);

  let closeModal = () => {
    setisOpen(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setisOpen(true);
      console.log("the timer works");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <header>Modal Header</header>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <h1>This is a modal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea
            magnam fugiat modi est necessitatibus ratione corrupti harum
            voluptatibus aspernatur nemo neque, consequuntur tempora dolores at
            assumenda. Corporis, quidem mollitia?
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
