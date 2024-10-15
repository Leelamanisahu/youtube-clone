import React, { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App = () => {

  const [isCollapsed,setIsCollapsed] = useState(false);

  const togglHandler = ()=>{
    setIsCollapsed(!isCollapsed);
  }


  return (
    <div className=''>
      <Header togglHandler={togglHandler}/>
      <Outlet/>
    </div>
  )
} 

export default App
