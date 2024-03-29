'use client';
// Importing necessary dependencies
import Image from 'next/image';
import React, { useState } from 'react';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaCheck, FaCopy } from 'react-icons/fa';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import * as confetti from 'confettis';

// Get the current date
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'long' });
const year = currentDate.getFullYear();
const dayOfWeekIndex = currentDate.getDay();
const dayOfWeekName = daysOfWeek[dayOfWeekIndex];
const formattedDate = `${dayOfWeekName}, ${day} ${month}, ${year}`;

// HeroSection component
const HeroSection = () => {
  // State for loading, message, and copy status
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy the coupon code to the clipboard
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText('LEHUT');
      setIsCopied(true);

      // Trigger confetti on copy
      confetti.create({
        x: 0.5,
        y: 0.7,
        count: 500,
        ticks: -1,
        gravity: [0.7, 1.2],
        speed: [35, 45],
        scale: [0.7, 0.8],
        decay: 0.91,
        shapes: ['square', 'ellipse'],
      });

      // Reset the copy state after a brief delay
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Error copying text: ', error);
    }
  };

  // Function to handle the button click and simulate coupon benefits
  const handleButtonClick = () => {
    setIsLoading(true);
    // Trigger confetti on button click
    confetti.create();

    // Simulate adding coupon discounts and benefits
    setTimeout(() => {
      setMessage(
        'Coupon discounts and benefits are being added to your account'
      );

      setTimeout(() => {
        setMessage('Coupon discounts added successfully 🎉');
        // Redirect after 2 seconds
        setTimeout(() => {
          window.location.href =
            'https://www.codingninjas.com/?referralCode=LEHUT&ref_type=certificates_alumni';
        }, 3000);
      }, 3000);
    }, 3000);
  };

  return (
    <div className='mt-[50px] md:mt-0 flex flex-col md:flex-row items-center justify-between h-[95v] md:h-screen bg-gradient-to-r from-violet-200 to-pink-200 p-3 sticky md:top-0 z-1'>
      {/* Left side with video */}
      <div className='md:w-1/2 md:pr-4 relative'>
        <video
          autoPlay
          muted
          loop
          className='w-full h-56 md:h-96 object-cover md:mt-0 mt-8 shadow-2xl'
          poster='https://miro.medium.com/v2/resize:fit:1200/1*YU1-Sb15VwncAF6oWxW3wQ.jpeg'
          preload='auto'
          controlsList='nodownload nofullscreen noremoteplayback'
        >
          <source src='/landing.mp4' />
        </video>
        <div className='absolute bottom-4 left-4 flex items-center'>
          {/* Coding Ninjas Logo */}
          <Image
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPFrIA6efIfBfAWvp03rSIzvjcWlP14Cp0U0qtTtEnA&s' // Replace with the actual logo path
            alt='Coding Ninjas Logo'
            className='w-12 h-12 mr-2'
            width={120}
            height={120}
          />
          <div>
            <div className='flex items-center mb-1'>
              {/* 5-star rating */}
              <div className='text-yellow-500 font-semibold mr-2'> 5.0</div>
              {[...Array(5)].map((_, index) => (
                <MdOutlineStarPurple500
                  key={index}
                  className='text-yellow-500'
                />
              ))}
            </div>
            {/* Caption */}
            <div className='text-white text-sm font-semibold'>
              🏆 Most Legit Coupon Code Owner<sup>*</sup>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with text */}
      <div className='md:w-1/2 md:pl-4 flex flex-col justify-center'>
        <div className='text-2xl md:text-4xl font-extrabold text-center md:text-left text-yellow-500 mb-4 capitalize bg-gray-700 w-fit px-1'>
          &quot;Money grows on skills, not trees&quot;
        </div>
        <div className='text-xl md:text-lg leading-relaxed text-start md:text-left text-black mb-6'>
          <ul className='list-none pl-5'>
            {/* List of benefits */}
            <li className='mb-4 flex items-center'>
              <div className='mr-2 text-green-500'>
                <VscVerifiedFilled className='w-7 h-7' />
              </div>
              <div>
                Unlock Additional{' '}
                <span className='font-bold text-green-600'> ₹15,000</span>{' '}
                Referral Discount – Limited Availability!
              </div>
            </li>
            <li className='mb-4 flex items-start'>
              <div className='mr-2 text-green-500'>
                <VscVerifiedFilled className='w-7 h-7' />
              </div>
              <div>
                Be an Early Bird and Enjoy Exclusive{' '}
                <span className='line-through'>20%</span>{' '}
                <span className='font-bold text-green-600'>~90% Discount</span>{' '}
                on Selected Courses.
              </div>
            </li>
            <li className='mb-4 flex items-start'>
              <div className='mr-2 text-green-500'>
                <VscVerifiedFilled className='w-7 h-7' />
              </div>
              <div>
                Save Big! Avail Up to{' '}
                <span className='font-bold text-green-600'>₹8,000 Off</span> on
                Every Course Today.
              </div>
            </li>
            <li className='mb-4 flex items-start'>
              <div className='mr-2 text-green-500'>
                <VscVerifiedFilled className='w-7 h-7' />
              </div>
              <div>
                <strong>Best Discount</strong> as on{' '}
                <span className='font-bold text-green-600'>
                  {formattedDate}
                </span>
              </div>
            </li>
            <li className='flex items-start'>
              <div className='mr-2 text-green-500'>
                <VscVerifiedFilled className='w-7 h-7' />
              </div>
              <div>
                Experience the GUARANTEED{' '}
                <span className='font-bold text-green-600'>
                  Maximum Savings{' '}
                </span>{' '}
                Available Online.
              </div>
            </li>
          </ul>
        </div>

        {/* Coupon code and copy button */}
        <div className='flex items-center justify-center md:justify-start mb-6'>
          <div className='text-xl md:text-3xl font-bold text-black mr-2'>
            Use Coupon Code:
          </div>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-600 transition duration-300 ease-in-out'
            onClick={handleCopyClick}
          >
            <div className='flex flex-row items-center justify-center space-x-3'>
              <div>{isCopied ? 'Copied!' : 'LEHUT (Tap to copy)'}</div>
              {isCopied ? (
                <span className='animate-bounce'>
                  <FaCheck className='w-5 h-5' />
                </span>
              ) : (
                <FaCopy />
              )}
            </div>
          </button>
        </div>

        {/* Button to explore courses */}
        <div>
          <button
            className={`bg-blue-500 w-full text-white px-8 py-3 rounded-full text-xl hover:bg-blue-600 transition duration-300 ease-in-out shadow-md ${
              isLoading && 'cursor-not-allowed opacity-100'
            }`}
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className='flex items-center'>
                <div className='mr-2 animate-spin'>
                  <AiOutlineLoading3Quarters />
                </div>
                {message}
              </div>
            ) : (
              <a href='https://www.codingninjas.com/?referralCode=LEHUT&ref_type=certificates_alumni'>
                Explore Coding Ninjas Courses
              </a>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporting the HeroSection component
export default HeroSection;
