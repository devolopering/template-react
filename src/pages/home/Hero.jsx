import React from 'react'
import heroImg from '/heroImg.svg'
import { FaArrowRight } from 'react-icons/fa6';
function Hero() {
  return (
    <div className='bg-[#1C1E53] pb-[157px] pt-[120px]'>
        <div className='flex justify-between max-w-[1280px] m-auto '>
        <div className='w-[582px]'>
            <h1 className='font-semibold text-[54px] text-white mb-[24px] '>Building stellar websites for early startups</h1>
            <p className='text-white text-[16px] mb-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className='flex items-center gap-[40px]'>
                <a href="#" className=' duration-[.1s] hover:bg-white hover:text-[#FCD980] border-[#FCD980] border-2 bg-[#FCD980] rounded-full font-semibold px-[56px] py-[16px]'>View our work</a>
                <button className='flex items-center justify-center gap-2 text-white'>View Pricing<FaArrowRight /></button>
            </div>
        </div>
        <div>
            <img src={heroImg} alt="hero img" />
        </div>
        </div>
    </div>
  )
}

export default Hero