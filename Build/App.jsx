import React from 'react';
import './App.css';
import Header from "./Components/HeroHeaderSection/Header"
import Section from './Components/HeroHeaderSection/Section';
import Container from './Components/Socialproofsection/Container';
import FeaturesContainer from './Components/Features Section/Container1';
import FeaturesSection from './Components/Features Section/Container2';
import TestimonialSection from './Components/Testimonial Section/feedback';
import Section1 from './Components/FAQ section/section1';
import Section2 from './Components/FAQ section/section2';
import Section3 from './Components/FAQ section/section3';
import ViewBlog from './Components/Blog Section/ViewBlog';
import BlogCards from './Components/Blog Section/blogCards';
import FreeTrial from './Components/CTA Section/FreeTrail';
import Footer from './Components/Footer/footer1';
import Footer2 from './Components/Footer/footer2';
import DividerSection from './Components/Divider/divider';


function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Section/>
        <DividerSection/>
        <Container/>
        <DividerSection/>
        <FeaturesContainer/>
        <FeaturesSection/>
        <TestimonialSection/>
        <DividerSection/>
        <Section1/>
        <Section2/>
        <Section3/>
        <DividerSection/>
        <ViewBlog/>
        <BlogCards/>
        <FreeTrial/>
        <Footer/>
        <Footer2/>
      </div>
    </>
  )
}
export default App;
