import Image from 'next/image';
import pj1 from '../public/pj1.png';
import pj2 from '../public/pj2.jpeg';
import pj3 from '../public/pj3.jpeg';
import pj4 from '../public/pj4.jpeg';

const Portfolio = () => {
   return (
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
         <div className="container">
            <div className="w-full px-4">
               <div className="max-w-xl mx-auto text-center mb-16">
                  <h2 className="font-bold text-dark text-3xl mb-4">
                     Latest Project
                  </h2>
                  <p className="font-medium  text-md text-dark">
                     Our fine works.
                  </p>
               </div>
            </div>
            <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
               <div className="mb-12 p-4 md:w-1/2">
                  <div className="rounded-md shadow-md overflow-hidden">
                     <Image
                        src={pj1}
                        width="600"
                        height="300"
                        className="w-full"
                     />
                     <h3 className="font-semibold text-xl text-dark mt-5 mb-3 p-3">
                        Landing Page
                     </h3>
                     <p className="font-medium text-base text-dark p-3">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable.
                     </p>
                  </div>
               </div>
               <div className="mb-12 p-4 md:w-1/2">
                  <div className="rounded-md shadow-md overflow-hidden">
                     <Image
                        src={pj2}
                        width="600"
                        height="300"
                        className="w-full"
                     />
                     <h3 className="font-semibold text-xl text-dark mt-5 mb-3 p-3">
                        Mobile App
                     </h3>
                     <p className="font-medium text-base text-dark p-3">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable.
                     </p>
                  </div>
               </div>
               <div className="mb-12 p-4 md:w-1/2">
                  <div className="rounded-md shadow-md overflow-hidden">
                     <Image
                        src={pj3}
                        width="600"
                        height="300"
                        className="w-full"
                     />
                     <h3 className="font-semibold text-xl text-dark mt-5 mb-3 p-3">
                        Dynamic Website
                     </h3>
                     <p className="font-medium text-base text-dark p-3">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable.
                     </p>
                  </div>
               </div>
               <div className="mb-12 p-4 md:w-1/2">
                  <div className="rounded-md shadow-md overflow-hidden">
                     <Image
                        src={pj4}
                        width="600"
                        height="300"
                        className="w-full"
                     />
                     <h3 className="font-semibold text-xl text-dark mt-5 mb-3 p-3">
                        Desktop Application
                     </h3>
                     <p className="font-medium text-base text-dark p-3">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Portfolio;
