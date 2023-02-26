import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Shop from './components/Shop';
import Checkout from './components/Checkout';


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <div className="App">
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
