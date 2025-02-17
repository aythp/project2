import { useState } from 'react';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';


const URL = 'http://localhost:5005/granCanaria';

export default function App() {

  //recuperar los datos de la API
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }, []);

  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage data={data}/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}