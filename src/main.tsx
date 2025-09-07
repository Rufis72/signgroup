import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import Home from './Home.tsx'
import PageNotFound from './404.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/*Both / and /home go to the same spot, I just couldn't find a nice way to put it on one line*/}
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} />

      {/* 404 page*/}
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)
