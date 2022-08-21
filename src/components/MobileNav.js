import { useState } from 'react';
import ResponsiveNavlink from './ResponsiveNavlink';

const MobileNav = () => {
   const [open, setOpen] = useState(false);
   return (
      <div className="md:hidden flex items-center justify-between py-2.5 px-4 border-b border-gray-700">
         <a href="#" className="text-white font-semibold  mr-8">
            RestOption
         </a>
         <div
            onClick={() => setOpen(false)}
            className={`${
               open ? 'block' : 'hidden'
            } bg-transparent absolute w-full h-full top-0 right-0 left-0 bottom-0`}
         />
         <button
            type="button"
            onClick={() => setOpen((PrevOpen) => !PrevOpen)}
            className="focus:outline-none"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-white"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth={2}
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
               />
            </svg>
         </button>
         <div
            className={`${
               open ? 'block' : 'hidden'
            } bg-white absolute right-0 mr-14 top-0 mt-3 py-1 rounded-lg w-56 overflow-hidden`}
         >
            <ResponsiveNavlink href="#about">About</ResponsiveNavlink>
            <ResponsiveNavlink href="#portfolio">Portfolio</ResponsiveNavlink>
            <ResponsiveNavlink href="#contact">Contact</ResponsiveNavlink>
         </div>
      </div>
   );
};

export default MobileNav;
