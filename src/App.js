import React,{useEffect} from 'react';
import ScrollReveal from 'scrollreveal';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
const App = () => {
  useEffect(()=>{
    const sr = ScrollReveal({
      origin: 'top',
      disttance: '80px',
      duration: 2000,
      reset: true,
    })
    sr.reveal(
      `
      nav,
      #hero,
      #services,
      #recommend,
      ##testimonials,
      footer,
      {
        opacity: 0,
        interval: 300
      }
      `
    )
  },[]);
  return (  
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Recommend></Recommend>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>

  );
}
 
export default App;