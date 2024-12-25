import React, { useState } from 'react';  
import { Link } from "react-router";
import About from './About';
import Blog from './Blog';

const HeroText = ({ display, order, setDisplay, children }) => {
  return (
    <div
      className={`container p-8 mx-auto flex flex-col justify-center items-start gap-y-2 absolute transition-all duration-300 ${
        display === order ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <h1 className=" font-mono font-bold text-black text-4xl">Hi! Im Aliyah Zahr -</h1>
      <h1 className="font-bold text-emerald-600 text-4xl">UI/UX & Data Analyst Enthusiast</h1>
      <p className="font-medium text-black text-l md:w-1/2">{children}</p>
      <div className='flex space-x-5 mt-2'>
      <button
        onClick={setDisplay}
        className="bg-black font-medium text-white text-l px-5 py-2 mt-2"
      >Change Quote
      </button>
      <Link to="/contact" className="bg-emerald-600 font-medium text-white text-l px-5 py-2 mt-2" >Wanna see my CV?</Link>
      </div>
    </div>
  );
};

const Jumbotron = () => {  
  const [display, setDisplay] = useState(0);
  return (
    <div
      className="h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('assets/images/p.png')" }}
    >
      <div className="w-full h-full bg-gradient-to-r flex items-center justify-center relative ">
        {/* tampilan 1 */}
        <HeroText display={display} order={0} setDisplay={() => setDisplay(1)}>
          "Code is like humor. When you have to explain it, it’s bad"
        </HeroText>
        {/* tampilan 2 */}
        <HeroText display={display} order={1} setDisplay={() => setDisplay(0)}>
        Technology is best when it brings people together, fostering collaboration and connection, and transforming the way we communicate and share ideas across the globe
        </HeroText>
      </div>
      <About/>
      {/* <Blog/> */}
    </div>
  
  );
};

export default Jumbotron;






//   const quotes = [  
//     {  
//       text: "In Hogwarts we safe! Magic is real! The wizarding world awaits! All you need is love and a little magic!",  
//       image: "url('assets/images/image.png')",  
//     },  
//     {  
//       text: "Believe in the impossible! Adventure awaits in every corner!",  
//       image: "url('assets/images/image1.png')",  
//     },  
//   ];  

//   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);  

//   const changeQuote = () => {  
//     setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);  
//   };  

//   return (  
//     <div  
//       className='h-screen bg-cover bg-center flex flex-col justify-center items-center'  
//       style={{ backgroundImage: quotes[currentQuoteIndex].image }}  
//     >  
//       <h1 className='bg-black/70 py-3 px-5 text-white text-2xl italic'>  
//         {quotes[currentQuoteIndex].text}  
//       </h1>  
//       <button  
//         className='bg-green-500 text-white px-4 py-2 mt-5 rounded-xl shadow-lg hover:bg-green-600 transition duration-300'  
//         onClick={changeQuote}  
//       >  
//         Change Quote  
//       </button>  
//       <Link to="/contact" className="bg-amber-700"></Link>
//     </div>  
//   );  
// }  

// export default Jumbotron;