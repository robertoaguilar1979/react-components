import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <header>Modal Header</header>
      <Modal>
        <h1>This is a modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea
          magnam fugiat modi est necessitatibus ratione corrupti harum
          voluptatibus aspernatur nemo neque, consequuntur tempora dolores at
          assumenda. Corporis, quidem mollitia?
        </p>
      </Modal>
    </div>
  );
}

export default App;
