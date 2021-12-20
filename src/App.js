import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Router from "./Components/Routes/Router";
// import dotenv from "dotenv";

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
