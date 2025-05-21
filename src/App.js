import desktopBanner from './images/ivei-desk-banner.png'
import mobileBanner from './images/ivei-mob-banner.png'
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ContactBulkForm from "./components/ContactBulkForm";
import ContactUs from "./components/ContactUs";
import FeaturedItems from "./components/FeaturedItems";

import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import CoreCategories from "./components/CoreCategories";
import EcommercePlatform from "./components/EcommercePlatform";
import ScrollToTop from "./components/ScrollToTop";




function App() {


  

  return (
    <>
    <Header />
    <HeroBanner mobileBanner = {mobileBanner} desktopBanner = {desktopBanner} />
    <CoreCategories /> 
    <ScrollToTop  />
    <EcommercePlatform/>
    <FeaturedItems /> 
    <ContactBulkForm />
    <Testimonial />
    <ContactUs />
    <Footer />
    </>
  );
}

export default App;
