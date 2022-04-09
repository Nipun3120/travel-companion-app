import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from './components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      {/* </header> */}
    </div>
  );
}

export default App;
