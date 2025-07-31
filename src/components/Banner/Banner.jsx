import React from 'react'
import BannerImg from '../../assets/images/banner/banner.png'

const Banner = () => {
  return (
    <div className='relative flex items-center bg-cover flex-start bg-center h-[65dvh] w-full' style={{backgroundImage
    : `url(${BannerImg})`}}>
        <div className='w-1/2 flex ml-auto items-center justify-center'>
            <div className='text-white text-center w-full'>
                <h1 className='text-6xl font-extrabold mb-4 text-yellow-300 transition-all duration-700'>Welcome to KartMitra</h1>
                <p className='text-2xl font-bold italic mb-6 '>Redefine your wardrobe with the latest fashion trends.</p>
                <div className="flex justify-center gap-6 mt-8">
                    <button className="bg-white text-black text-lg font-semibold px-8 py-3 rounded-md shadow hover:bg-black hover:text-white transition duration-300">
                        New Trends
                    </button>
                    
                    <button className="bg-white text-black text-lg font-semibold px-8 py-3 rounded-md shadow hover:bg-black hover:text-white transition duration-300">
                        Shop Now
                    </button>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Banner