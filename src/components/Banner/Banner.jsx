import React from 'react'
import BannerImg from '../../assets/images/hero-img.png'

const Banner = () => {
  return (
    <div className='relative flex items-center bg-cover flex-start bg-center h-svh w-full' style={{backgroundImage
    : `url(${BannerImg})`}}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 text-white p-8'>
            <h1 className='text-5xl font-bold mb-4'>Welcome to KartMitra</h1>
            <p className='text-lg mb-6'>Discover the latest trends in fashion and shop your favorite styles.</p>
            <button className='bg-white text-black px-6 py-3 rounded hover:bg-gray-200'>Shop Now</button>
        </div>
    </div>
  )
}

export default Banner