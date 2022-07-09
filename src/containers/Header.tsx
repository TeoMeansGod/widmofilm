import React from 'react'
import NavBar from '../components/NavBar'
import HeaderContent from '../components/HeaderContent'
function Header() {
  return (
    <div className='w-100 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <NavBar />
      <HeaderContent />
    </div>
  )
}

export default Header