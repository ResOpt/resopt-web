const Contact = () => {
   return (
      <section id="contact" className="pt-36 pb-32">
         <div className="container">
            <div className="w-full px-4">
               <div className="max-w-xl mx-auto text-center mb-16">
                  <h4 className="font-semibold text-lg text-primary mb-2">
                     Contact
                  </h4>
                  <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                     Contact us
                  </h2>
                  <p className="font-medium text-md text-dark md:text-lg">
                     Contact us and get the best service you can get.
                  </p>
               </div>
            </div>
            <form>
               <div className="w-full lg:w-2/3 lg:mx-auto">
                  <div className="w-full px-4 mb-8">
                     <label
                        htmlFor="name"
                        className="text-base text-primary font-bold"
                     >
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:border-primary"
                     />
                  </div>
                  <div className="w-full px-4 mb-8">
                     <label
                        htmlFor="name"
                        className="text-base text-primary font-bold"
                     >
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:border-primary"
                     />
                  </div>
                  <div className="w-full px-4 mb-8">
                     <label
                        htmlFor="massage"
                        className="text-base text-primary font-bold"
                     >
                        Massage
                     </label>
                     <textarea
                        type="textarea"
                        id="massage"
                        className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:border-primary h-32"
                     />
                  </div>
                  <div className="w-full">
                     <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                        Send
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </section>
   );
};

export default Contact;
