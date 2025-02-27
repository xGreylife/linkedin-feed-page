import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header/Header'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'

function App() {
  return (
    <>
      <Header />
      <div className='page-content'>
        <LeftSidebar/>
      </div>
    </>
  )
}

export default App
