import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import PreLoader from '../src/PreLoader'
import './App.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsappLogo from '../components/WhatsappLogo';
import ScrollToTop from '../components/ScrollToTop';
import Border from '../components/Border';
import CollectionsPage from '../components/CollectionsPage';
import ScrollRestoration from '../components/ScrollRestoration';
import ContactUs from '../components/ContactUs.jsx';
import Admin from '../components/Admin.jsx';

function App() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const images = document.querySelectorAll('img');
        const icons = document.querySelectorAll('svg');
        const totalImages = images.length;
        const totalIcons = icons.length;
        let imagesLoaded = 0;
        let iconsLodaed = 0;

        const handleImageLoad = () => {
            imagesLoaded += 1;
            if (imagesLoaded === totalImages) {
                setLoading(false);
            }
        };

        const handleIconLoad = () => {
            iconsLoaded += 1;
            if (imagesLoaded === totalImages && iconsLoaded === totalIcons) {
                setLoading(false);
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
                img.addEventListener('error', handleImageLoad);
            }
        });

        icons.forEach((icon) => {
            if (icon.complete) {
                handleIconLoad();
            } else {
                icon.addEventListener('load', handleIconLoad);
                icon.addEventListener('error', handleIconLoad);
            }
        });

        // Fallback for when there are no images
        if (totalImages === 0 && totalIcons === 0) {
            setLoading(false);
        }

        // Cleanup event listeners
        return () => {
            images.forEach((img) => {
                img.removeEventListener('load', handleImageLoad);
                img.removeEventListener('error', handleImageLoad);
            });
            icons.forEach((icon) => {
                icon.removeEventListener('load', handleIconLoad);
                icon.removeEventListener('error', handleIconLoad);
            });
        };
    }, []);


  return (
    <>
      {loading && <PreLoader/>}
      
      <BrowserRouter>
        <WhatsappLogo />
        <ScrollToTop />
        <Navbar />
        <ScrollRestoration />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/collection' element={<CollectionsPage/> }/>
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/admin' element={<Admin/>} />
        </Routes>
        <Border />
        <Footer />
      </BrowserRouter>
    </>
  
  )
  
}

export default App
