"use client"

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      label: 'Popular Courses',
      link: 'https://www.codingninjas.com/?referralCode=LEHUT&ref_type=certificates_alumni',
    },
    {
      label: 'Data structures & Algorithm',
      link: 'https://www.codingninjas.com/?referralCode=LEHUT&ref_type=certificates_alumni',
    },
    {
      label: 'Web Development',
      link: 'https://www.codingninjas.com/?referralCode=LEHUT&ref_type=certificates_alumni',
    },
    {
      label: 'Competitive Programming',
      link: 'https://www.codingninjas.com/?referralCode=LEHUT&ref_type=certificates_alumni',
    },
    {
      label: 'Analytics & Data Science',
      link: 'https://www.codingninjas.com/?referralCode=LEHUT&ref_type=certificates_alumni',
    },
    {
      label: 'Interview Preparation',
      link: 'https://www.codingninjas.com/?referralCode=LEHUT&ref_type=certificates_alumni',
    },
  ];

  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white p-3 md:p-5 fixed w-full top-0 z-20'>
      <div className='flex flex-row items-center justify-between space-x-5'>
        <div className='text-2xl md:text-3xl font-bold'>
          Coding Ninjas Coupon
          <sup className='text-[15px] text-yellow-600'>Premium</sup>
        </div>
        <div className='md:hidden cursor-pointer' onClick={toggleNavbar}>
          {isOpen ? (
            <FaTimes className='text-3xl' />
          ) : (
            <FaBars className='text-3xl' />
          )}
        </div>
      </div>
      <div
        className={`md:flex flex-col md:flex-row items-center md:space-x-4 font-semibold mt-4 md:mt-0 ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target='_blank'
            className={`mb-2 md:mb-0 transition duration-300 ease-in-out ${
              isOpen ? 'hover:text-orange-600' : ''
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
