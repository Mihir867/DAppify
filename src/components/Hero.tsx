// HeroItem.js

"use client";
import {TypewriterEffectSmooth} from "../components/ui/typewriter-effect"

export function HeroItem(){
  const words = [
    {
      text: "Empowering",
    },
    {
      text: "Innovations",
    },
    
    {
      text: "with",
    },
    {
      text: "CauseCoin.",
      className: "text-green-500  font-extrabold ",
    },
  ];
    return(
        <>

    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-2xl   ">
      Crowdfund with the Transparency and Security of Web3      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 hover:bg-gray-600 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10  hover:bg-slate-400 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>


        </>
    );
}
