import { useEffect } from "react";
import Aos from 'aos';
import Header from "./components/Header/Header.jsx";
import './App.css';
import Hero from "./components/UI/Hero.jsx";
import Exercises from "./components/UI/Exercises.jsx";
import Start from "./components/UI/Start.jsx";
import Pricing from "./components/UI/Pricing.jsx";
import Footer from "./components/UI/Footer.jsx";

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <Header />
    <Hero />
    <Exercises />
    <Start />
    <Pricing />
    <Footer />
    </>
  );
}

export default App;
