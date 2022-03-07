import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import TextInput from "./components/TextInput";
function App() {
  return (
    <div className="App">
      <Header />
      <Counter add={"+"} minus={"-"} cancel={"cancel"} />
      <TextInput />
    </div>
  );
}

export default App;
