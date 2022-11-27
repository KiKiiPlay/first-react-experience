import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent button_name="New Button" />
      <ImageComponent
        img="https://picsum.photos/200/300"
        alt="Random picture"
      />
    </div>
  );
}

export default App;
