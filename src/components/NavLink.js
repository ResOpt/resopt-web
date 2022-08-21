import Link from 'next/link';

const Navlink = ({ href, children }) => {
   return (
      <Link href={href}>
         <a className=" md:text-sm font-medium lg:text-base px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg">
            {children}
         </a>
      </Link>
   );
};

export default Navlink;
