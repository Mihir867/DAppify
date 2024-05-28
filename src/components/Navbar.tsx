"use client"
import { useState } from 'react';
import Image from "next/image";
import { MdArrowForward } from 'react-icons/md';

export function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <nav className="max-w-screen-2xl mx-auto px-4 py-2 flex flex-wrap justify-between mt-8" style={{ fontFamily: "Satoshi" }}>
      <div className="flex-grow  md:-mt-16  ">
        <img
          src="/assets/Causecoin3.svg"
          alt="Logo"
          className='h-44'
          
        />
      </div>
      <div className="flex flex-wrap justify-center md:justify-end">
        <ul className="hidden md:flex flex-wrap md:flex-row md:space-x-4 list-none">
          <li className="mb-2 md:mb-0">
            <a href="/" className="nav-link text-xl px-2 py-1 hover:border-b-2">Home</a>
          </li>
          <li className="mb-2 md:mb-0">
            <a href="#Stressometer" className="nav-link text-xl px-2 py-1 hover:border-b-2">Stressometer</a>
          </li>
          <li className="mb-2 md:mb-0">
            <a href="#about" className="nav-link text-xl px-2 py-1 hover:border-b-2">About</a>
          </li>
          <li className="mb-2 md:mb-0">
            <a href="/waitlist" className="nav-link btn-pre-register text-xl bg-black text-white px-4 py-2 rounded-lg hover:border-b-2">
              Pre-Register <MdArrowForward className="inline-block ml-2" />
            </a>
          </li>
        </ul>
      </div>

      <div className='md:hidden flex items-center'>
        <button className='inline-flex items-center justify-center p-2 rounded-md text-black md:text-black focus:outline-none focus:ring-2 focus:inset-2 focus:ring-black ' onClick={toggleNavbar}>
          {navbar ? (
            <svg
              className=" h-7 w-6 "
              viewBox="0 0 24 24"
              stroke='currentColor'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className=" h-7 w-6"
              viewBox="0 0 24 24"
              stroke='currentColor'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
      </div>
      {navbar && (
        <div className='md:hidden absolute right-0 w-1/2 h-20%  bg-black text-white  flex flex-col items-center justify-center gap-8 text-4xl z-40  border border-gray-700 rounded-xl mt-28'>
          <div className='px-2 pt-2 pb-4 sm:px-3'>


            <div className="mb-2 md:mb-0">
              <a href="/" className="nav-link text-xl px-2 py-1 hover:border-b-2">Home</a>
            </div>
            <div className="mb-2 md:mb-0">
              <a href="/stressometer" className="nav-link text-xl px-2 py-1 hover:border-b-2">Stressometer</a>
            </div>
            <div className="mb-2 md:mb-0">
              <a href="/about" className="nav-link text-xl px-2 py-1 hover:border-b-2">About</a>
            </div>
            <div className="mb-2 md:mb-0">
              <a href="/about" className="nav-link text-xl px-2 py-1 hover:border-b-2">Pre-Register</a>
            </div>

          </div>
        </div>

      )}
    </nav>
  );
}
