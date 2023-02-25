import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Shop from './components/Shop';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <Login/>
        <Signup/>
        <Shop/>
      </div>
    </BrowserRouter>
  );
}

export default App;
