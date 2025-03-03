import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header/Header'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import Feed from './components/Feed/Feed';


function App() {
  return (
    <>
      <Header />
      <div className='page-content'>
        <LeftSidebar/>
        <Feed/>
      </div>
    </>
  )
}

export default App
