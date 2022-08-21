import Link from 'next/link';

const ResponsiveNavlink = ({ href, children }) => {
   return (
      <Link href={href}>
         <a className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">
            {children}
         </a>
      </Link>
   );
};

export default ResponsiveNavlink;
