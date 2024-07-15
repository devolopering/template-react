// OurProject.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Card_1 from '/Card_1.png';
import Card_2 from '/Card_2.png';
import Card_3 from '/Card_3.png';

function OurProject() {
  return (
    <div className='max-w-[1280px] mx-auto pb-[128px]'>
      <div className='flex items-center justify-between mt-[128px] mb-[64px]'>
        <h2 className='text-[48px] font-semibold'>View our projects</h2>
        <button className='flex items-center justify-center gap-2 text-black'>
          View More<FaArrowRight />
        </button>
      </div>
      <div className='flex justify-between gap-[25px]'>
        <div className='relative group overflow-hidden'>
          <img src={Card_1} alt="card 1" className='w-full h-auto' />
          <div className='absolute top-0 left-0 w-[50%] h-full bg-[#1c1e5340] transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 flex flex-col items-start justify-end pl-[48px] pb-[76px] text-white'>
            <h3 className='text-[24px] font-semibold max-w-[323px] mr-auto mb-2'>Workhub office Webflow Webflow Design</h3>
            <p className='mb-4 max-w-[323px] mr-auto'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
            <button className=' flex items-center justify-center gap-2 mt-[40px] text-[#FCD980]'>
              View project<FaArrowRight />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-[26px]'>
          <div className='relative group '>
            <img src={Card_2} alt="card 2" className='w-full h-auto' />
            <div className=' absolute top-0 left-0 w-full h-full bg-[#1c1e5340] transition-transform duration-500 ease-in-out flex flex-col items-start justify-center px-[56px]  text-white'>
              <h3 className='text-[24px] font-semibold mb-2'>Unisaas Website Design</h3>
              <button className='flex items-center justify-center gap-2 text-[#FCD980]'>
                View portfolio<FaArrowRight />
              </button>
            </div>
          </div>
            <img src={Card_3} alt="card 3"  />
        </div>
      </div>
    </div>
  );
}

export default OurProject;
