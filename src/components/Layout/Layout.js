import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';
import Navbar from '../Hero';
import HumanSection from '../HumanSection';
import Portfolio from '../Portfolio';

const Layout = (props) => {
   const { children } = props;
   return (
      <div>
         <Navbar />
         <HumanSection />
         <About />
         <Portfolio />
         <Contact />
         <Footer />
         <div>{children}</div>
      </div>
   );
};

export default Layout;
