import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

function Frequently() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How much time does it take?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'What is your class naming convention?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'How do you communicate?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'I have a bigger project. Can you handle it?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'What is your class naming convention?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1280px] mx-auto pb-[128px] flex gap-[109px] justify-between">
      <div>
        <h2 className="text-[38px] font-semibold mb-[32px]">Frequently asked questions</h2>
        <p className="text-blue-500 font-medium mb-[32px] text-[18px]">Contact us for more info</p>
      </div>
      <div className="flex flex-col gap-[16px] max-w-[843px] m-auto w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-300">
            <div
              className="flex justify-between items-center py-[16px] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h6 className="text-[#282938] font-semibold text-[24px]">
                <span className='mr-[55px] font-semibold text-[24px] text-[#2405F2]'>0{index + 1}</span> {faq.question}
              </h6>
              <span className='font-semibold text-[24px]'>
                {activeIndex === index ? '✕' : <FaPlus />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="py-[16px] max-w-[666px] m-auto">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frequently;
