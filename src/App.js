import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuranPage from './Components/QuranPage'
import loadingImg from './Components/images/loading.gif';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  
  if(isLoading) {
    return (
      <div id='loading'>
        <img src={loadingImg} alt='loading animaiton' />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:transliteration' element={<QuranPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
