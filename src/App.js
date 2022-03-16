// import React from "react";
// import HeroSection from "./Goodluck/HeroSection";
// import About from "./Goodluck/About";
// import Body from "./components/Body";
// import SecondBody from "./components/SecondBody";

// const App = () => {
//   return (
//     <div>
//       {/* <HeroSection /> */}
//       <About />
//       <Body />
//       <SecondBody />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Structure from "./sheCodes/StructureHeader/Structure";
import Hero from "./sheCodes/Hero";
import Steps from "./sheCodes/Steps";
// import Vg from "./sheCodes/Vg";
import Gain from "./sheCodes/Gain";
import Join from "./sheCodes/Join";
import Rating from "./sheCodes/Rating";
import Footer from "./sheCodes/Footer";

const App = () => {
  return (
    <div>
      <Structure />
      <Hero />
      <Steps />
      {/* <Vg /> */}
      <Gain />
      <Join />
      <Rating />
      <Footer />
    </div>
  );
};

export default App;
