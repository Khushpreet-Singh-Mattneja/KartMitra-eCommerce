import React from 'react'
import { Wishlist } from '../icons/WishlistIcon'
import { Account } from '../icons/AccountIcon'
import { Cart } from '../icons/CartIcon'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='flex items-center py-4 px-10 justify-normal gap-20 custom-nav'>
        <div className='flex items-center gap-4'> 
            {/* Logo */}
            <a className='text-4xl text-black font-bold italic gap-8 tracking-wide' href='/'>KartMitra</a>
        </div>

        <div className='flex flex-wrap items-center gap-12 px-5 py-2'>
          {/* Navbar Items - Shop, Men, Women, Kids  */}
          <ul className='flex gap-4 md:gap-5 lg:gap-5 text-black font-extrabold text-lg'>
            <li><NavLink to="/" className={({isActive})=> isActive ? 'active-link':'passive-link'}>Shop</NavLink></li>
            <li><NavLink to="/men" className={({isActive})=> isActive ? 'active-link':'passive-link'}>Men</NavLink></li>
            <li><NavLink to="/women" className={({isActive})=> isActive ? 'active-link':'passive-link'}>Women</NavLink></li>
            <li><NavLink to="/kids" className={({isActive})=> isActive ? 'active-link':'passive-link'}>Kids</NavLink></li>
          </ul>
        </div>

        <div className='flex items-center justify-between gap-10 ml-auto'>
          {/* Search Bar */}
          
          <div className='border rounded flex overflow-hidden transition-all duration-300 ease-in-out hover:border-black focus-within:border-black'>
            <button className='flex items-center justify-around border-1 w-96'>
              <svg className="h-4 w-4 text-grey-dark ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
              <input type="text" className="px-4 py-2 outline-none w-80 mr-2 " placeholder="Search"/>
            </button>
          </div>
          
          <div className='flex items-center gap-64'> 
            {/* Action Items - icons */}

            <ul className='flex gap-8'>
              <li className="flex items-center"><button href="/"><Wishlist/></button></li>
              <li className="flex items-center"><button href="/"><Account/></button></li>
              <li className="flex items-center"><a href="/cart-items"><Cart/></a></li>
            </ul>
          </div>

          

        </div>
    </nav>
  )
}

export default Navbar