import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const username = props.data ? props.data.firstName : 'Admin'
  const userRole = props.data ? 'Employee' : 'Administrator'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl'>
      <div className='flex items-center justify-between'>
        {/* Welcome Message */}
        <div className='flex items-center space-x-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg'>
            <span className='text-white text-xl font-bold'>
              {username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-white'>
              Hello, <span className='text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>{username}</span> 👋
            </h1>
            <p className='text-gray-300 text-sm mt-1'>{userRole} Dashboard</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={logOutUser}
            className='bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'></path>
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors'
      >
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </button>
    </div>
  )
}

export default Header