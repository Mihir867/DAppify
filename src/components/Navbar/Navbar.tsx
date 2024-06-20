"use client";
import * as React from 'react';
import ProductNav from "./PlatformNav";
import Navlist2 from "./NavUtils/Navlist2";
import SolutionNav from "./WhoweNav";
import OpenSourceNav from "./SolutionsNav";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import toast, {Toaster} from 'react-hot-toast';

type Props = {};

export default function Navbar(props: Props) {
  const [showNav, setShowNav] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  

  return (
    <div className="text-black bg-white  px-10 md:px-20 border-b-2  shadow-2xl ">
      <Toaster />
      <div className="flex items-center max-lg:justify-between max-lg:flex-row-reverse">
        <div className="flex justify-between items-center max-lg:w-full">
          
            <img
              src="/assets/CauseCoin3.svg"
              alt="CauseCoin"
              width="150"
              height="60"
              className="text-black"
            />
          

          <button
            type="button"
            onClick={() => setShowNav(!showNav)}
            className="lg:hidden cursor-pointer"
          >
            <div
              className={`w-[23px] h-[2px] transition ease-in duration-150  bg-black ${
                showNav ? "rotate-45 mb-0  translate-y-[1px]" : "rotate-0 mb-1"
              } `}
            ></div>
            <div
              className={`w-[23px] h-[2px] transition ease-in duration-150 bg-black ${
                showNav ? "hidden mb-0" : "mb-1"
              } `}
            ></div>
            <div
              className={`w-[23px] h-[2px] transition ease-in duration-150 bg-black  ${
                showNav ? "-rotate-45 mb-0" : "rotate-0"
              }`}
            ></div>
          </button>
        </div>
        <div
          className={` flex w-full  max-lg:absolute transition ease-in duration-200 top-20 z-40  ${
            showNav
              ? "max-lg:translate-x-0 max-lg:scale-100"
              : " max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"
          }`}
        >
          <div className="flex max-lg:flex-col  lg:items-center lg:justify-between max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px]  overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
            <nav className="mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5 ">
              <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto">
              <OpenSourceNav />
              
                <ProductNav />
                <SolutionNav />
                
                
                <li>
                  <a className="max-lg:font-semibold text-lg flex items-center p-1 hover:text-neutral-300">
                    About Me
                  </a>
                </li>
              </ul>
            </nav>
            <div className="lg:flex items-center text-lg max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4">
            
                  <div className="max-lg:flex justify-center  max-lg:border-[1px] max-lg:mr-4 rounded-md max-lg:bg-white">
                    <Link href="/signin" className="hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-bold ">
                      Sign in
                    </Link>
                  </div>
                  <Link href="/signup" className="max-lg:hidden px-4 py-[6px] border-[1px] rounded-md hover:text-neutral-400 ">
                    Sign up
                  </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


