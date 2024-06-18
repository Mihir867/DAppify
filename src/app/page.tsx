// Home.js
"use client"
import * as React from 'react';

import HeroItem from "../components/Hero";
import Navbar from '../components/Navbar/Navbar';

export default function Home(){
  return (
    <>
      <Navbar />
      <HeroItem />
    </>
  );
}
