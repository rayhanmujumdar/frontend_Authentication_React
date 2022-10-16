import './App.css';
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Login from './Components/LogIn/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
