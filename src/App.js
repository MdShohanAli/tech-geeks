
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Video from './Components/Video/Video';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}  ></Route>
        <Route path='/home' element={<Home></Home>}  ></Route>
        <Route path='/video' element={<Video></Video>}  ></Route>
        <Route path='/login' element={<Login></Login>}  ></Route>
      </Routes>
    </>
  );
}

export default App;
