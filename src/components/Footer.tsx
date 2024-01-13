import React from 'react';
import { FaSquareXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white p-4 md:p-6 w-full md:sticky bottom-0'>
      {/* Left section with the quote */}
      <div className='mb-4 md:mb-0 text-center md:text-left'>
        <p className='text-xl md:text-2xl font-bold'>
          &quot;Invest in your skills, they are the true currency of
          success.&quot;
        </p>
        <p className='text-sm md:text-base mt-2'>
          Enhance your abilities, and the wealth will follow.
        </p>
      </div>

      {/* Right section with social links */}
      <div className='flex space-x-4 text-3xl'>
        <a
          href='https://x.com/ashusnapx'
          target='_blank'
          className='hover:text-orange-600 transition duration-300 ease-in-out'
        >
          <FaSquareXTwitter />
        </a>
        <a
          href='https://www.linkedin.com/in/ashusnapx/'
          target='_blank'
          className='hover:text-orange-600 transition duration-300 ease-in-out'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/ashusnapx'
          target='_blank'
          className='hover:text-orange-600 transition duration-300 ease-in-out'
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
