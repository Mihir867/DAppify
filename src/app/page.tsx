// Home.js

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar"
import { HeroItem } from "@/components/Hero"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroItem />
    </>
  );
}
