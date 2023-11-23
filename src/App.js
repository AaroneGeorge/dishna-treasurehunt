import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Quiz1 from './component/Quiz1'
import Quiz2 from './component/Quiz2'
import Quiz3 from './component/Quiz3'
import Quiz4 from './component/Quiz4'
import Quiz5 from './component/Quiz5'
import Quiz6 from './component/Quiz6'
import Quiz7 from './component/Quiz7'
import Quiz8 from './component/Quiz8'
import Quiz9 from './component/Quiz9'
import Quiz10 from './component/Quiz10'
import Quiz11 from './component/Quiz11'
import Quiz12 from './component/Quiz12'
import Success from './component/Success'
import Fail from './component/Fail'
import Clue from './component/Clue'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Quiz1/>} />
        <Route path='/12133' element={<Quiz2/>} />
        <Route path='/eweqwe' element={<Quiz3/>} />
        <Route path='/sdasda' element={<Quiz4/>} />
        <Route path='/weqweqw' element={<Quiz5/>} />
        <Route path='/cxczs' element={<Quiz6/>} />
        <Route path='/eeqwe' element={<Quiz7/>} />
        <Route path='/cxzcz' element={<Quiz8/>} />
        <Route path='/rqwrqws' element={<Quiz9/>} />
        <Route path='/dasfa' element={<Quiz10/>} />
        <Route path='/xczdas' element={<Quiz11/>} />
        <Route path='/eqwdcx' element={<Quiz12/>} />
        <Route path='/suxes' element={<Success/>} />
        <Route path='/foil' element={<Fail/>} />
        <Route path='/clew' element={<Clue/>} />

      </Routes>
   
    </BrowserRouter>
  )
}

export default App