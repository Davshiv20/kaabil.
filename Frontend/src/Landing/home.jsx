import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import hero from "../assets/hero.png";
import banner from "../assets/banner.png";
import HowItWorks from "./howitworks";
import { Button } from "@/components/ui/button";
import WhatWeDo from "./whatwedo";

const Home = () => {
  return (
    <section id="home">
    <div className="md:flex min-h-screen w-full flex-col">
      <Navbar />
      <div className="flex flex-col w-full h-[790px] mt-24"> 
        <div className="flex flex-col md:flex-row items-center md:justify-between"> 
          <div className="flex-grow  text-center md:text-left  py-8 px-24 mr-8 sm:mr-0 mb-8 sm:mb-0"> 
            <h1 className="text-6xl font-bold mb-4">
              AI-Powered Exam <br /> 
              <span className="whitespace-no-wrap">Preparation Platform</span>
            </h1>
            <p className="text-lg mb-4">
              Learning with Kabil is fun, and research shows that it works! With quick
              bite-sized lessons, you’ll earn points and unlock new levels while
              gaining real-world communication skills.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="py-8 px-12 rounded-full flex mt-16 text-center md:items-center items-center">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex-grow mt-40 flex justify-center sm:justify-end">
            <img src={hero} className="w-[1728px] h-auto" alt="hero" />
          </div>
        </div>
        <div className="relative w-full h-[429px]">
          <img src={banner} alt="banner"></img>
        </div>
          <WhatWeDo />
          <HowItWorks />
      
        <Footer />
      </div>
      
    </div>
    </section>
    
  );
};

export default Home;
