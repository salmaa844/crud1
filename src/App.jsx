import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Create from './components/Create'
import Details from './components/users/Details'
import Edit from './components/users/Edit'
function App() {
  return (
    <Routes>
      <Route path='/'/>
      <Route path='/user/index' element={<Index/>} />
      <Route path='/user/create'  element={<Create/>}/>
      <Route path='/user/:id' element={<Details/>}/>
      <Route path='/user/edit/:id' element={<Edit />}/>
      <Route path='*' element={<h2>user not found</h2>}/>
    </Routes>
   
  )
}

export default App