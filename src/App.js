import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Result from './pages/Result';
import { useEffect, useState } from 'react';
function App() {
  const getData = () => {
    let celengan = JSON.parse(localStorage.getItem("investasi") || "[]")
    if (celengan) {
      return celengan
    }
    return []
  }
  const [data, setData] = useState(getData())
  useEffect(() => {
    localStorage.setItem("investasi", JSON.stringify(data))
  }, [data])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home setData={setData} />} />
        <Route path='/result' element={<Result data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
