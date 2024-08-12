import React from 'react'
import logo from '../assets/ailment-logo.svg'

const Header: React.FC = () => {
  return (
    <header className='flex items-center  w-full p-5 gap-4 bg-neutral-200'>
      <img className='w-10 h-10' src={logo} alt='logo' />
      <h2 className='font-gupter font-semibold text-2xl'>Ailment View</h2>
    </header>
  )
}

export default Header
