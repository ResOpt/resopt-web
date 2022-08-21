import Image from 'next/image';
import Link from 'next/link';
import bg from '../public/bg-1.png';

const HumanSection = () => {
   return (
      <section id="about" className="pt-36">
         <div className="container">
            <div className="flex flex-wrap">
               <div className="w-full self-center px-4 lg:w-1/2">
                  <h1 className="text-base font-semibold text-primary md:text-xl">
                     Hello everyones,{' '}
                     <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                        We are RestOption Company
                     </span>
                  </h1>
                  <h2 className="font-medium text-dark text-lg mb-5 mt-5 lg:text-2xl">
                     Company | <span className="text-black">RestOption</span>
                  </h2>
                  <p className="font-medium text-slate-700 mb-10">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.
                  </p>
                  <Link href="/">
                     <a className="text-base font-semibold text-white bg-sky-900 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                        Contact Us
                     </a>
                  </Link>
               </div>
               <div className="w-full self-end px-4 lg:w-1/2">
                  <div className="relative mt-10 lg:mt-0 lg:right-0">
                     <Image src={bg} className="max-w-full mx-auto" />
                     <span className="absolute -bottom-14 -z-10 left-1/2 -translate-x-1/2 md:scale-110">
                        <svg
                           viewBox="0 0 200 200"
                           xmlns="http://www.w3.org/2000/svg"
                           width="400"
                           height="400"
                        >
                           <path
                              fill="#1e293b"
                              d="M38.9,-40.9C54.6,-33.3,74.2,-24.9,77.9,-12.5C81.7,0,69.5,16.5,57.1,28.1C44.6,39.7,32,46.4,18.4,52C4.8,57.6,-9.8,62.2,-21.6,58.3C-33.5,54.5,-42.6,42.2,-47.3,29.5C-51.9,16.9,-52,3.8,-51.7,-11C-51.3,-25.8,-50.4,-42.4,-41.7,-51.3C-33,-60.1,-16.5,-61.2,-2.4,-58.3C11.7,-55.4,23.3,-48.5,38.9,-40.9Z"
                              transform="translate(100 100) scale(1)"
                           />
                        </svg>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HumanSection;
