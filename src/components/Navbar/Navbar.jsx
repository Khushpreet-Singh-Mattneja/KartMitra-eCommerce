import React from 'react'
import { Wishlist } from '../icons/Wishlist'
import { Account } from '../icons/Account'
import { Cart } from '../icons/Cart'

const Navbar = () => {
  return (
    <nav className='flex items-center py-6 px-16 justify-between gap-40'>
        <div className='flex items-center gap-6'> 
            {/* Logo */}
            <a className='text-3xl text-black font-bold gap-8' href='/'>KartMitra</a>
        </div>

        <div className='flex flex-wrap items-center gap-10 flex-1'>
          {/* Navbar Items - Shop, Men, Women, Kids  */}
          <ul className='flex gap-14 text-gray-600'>
            <li><a href="/" className="hover:text-black">Shop</a></li>
            <li><a href="/men" className="hover:text-black">Men</a></li>
            <li><a href="/women" className="hover:text-black">Women</a></li>
            <li><a href="/kids" className="hover:text-black">Kids</a></li>
          </ul>

        </div>

        <div className='flex justify-center'>
          {/* Search Bar */}
          <div className='border rounded flex overflow-hidden'>
            <button className='flex items-center justify-center px-4 border-l'>
              <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
              <input type="text" className="px-4 py-2 outline-none" placeholder="Search"/>
            </button>
          </div>
          
          <div className='flex flex-wrap items-center gap-4'>
            {/* Action Items - icons */}

            <ul className='flex flex-wrap items-center gap-4'>
              <li><button href="/"><Wishlist/></button></li>
              <li><button href="/"><Account/></button></li>
              <li><a href="/cart-items"></a><Cart/></li>
            </ul>
          </div>

        </div>
    </nav>
  )
}

export default Navbar