import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Shop from './components/Shop';


function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Login/>
      <div className="App">
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
