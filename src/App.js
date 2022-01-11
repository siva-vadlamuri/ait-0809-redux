import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Router from "./Components/Routes/Router";
import Counter from "./Components/Counter";
// import dotenv from "dotenv";

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Counter />
    </div>
  );
}

export default App;
