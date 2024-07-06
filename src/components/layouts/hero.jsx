import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

function Hero() {
 


 



  const divStyle = {
    backgroundImage: `linear-gradient(180deg, #111111 50%, rgba(17, 17, 17, 0.9) 95%), url(${process.env.PUBLIC_URL}/skybg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',                                                 
    /* Add other background properties as needed */
    height: '115vh',  // Example height, adjust as necessary
    clipPath: 'circle(95.5% at 50% 25%)',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Adding box shadow to the bottom

  };





  
  return (
    <div  style={divStyle}  className="relative custom-clip-path  bg-primaryBlack to-white bg-gradient-to-r   text-left items-left flex flex-col h-auto h-auto bg-cover bg-center overflow-hidden ">

      <p data-aos="fade-in" className='  font-bold leading-16 text-4xl text-white  z-10	 text-left pt-8 px-4 mt-6 '>Hi, this is <span className=' text-secondaryGreen animate-fadein underline'>Aya G</span> , your spiritual coach and relationship guide.</p>
      <p  data-aos="fade-in" data-aos-delay="200" className='font-medium   z-10	font_nunito text-lg	font_lora text-white text-left p-4'>I help individuals and managers create authentic lives, build better connections, and grow in consciousness.</p>
      <button data-aos="fade-in"  data-aos-delay="300" className=' boxshadowbtn_white leading-4 z-10		 w-fit px-6 text-lg   bg-primaryPurple   font-bold text-primaryPurple mx-4 mb-4 py-4 rounded-full text-white '>Who is the Real Aya ?</button>

<div className='relative'>
<img alt="hero2"  data-aos-delay="400" className='w-128 z-10 	opacity-80 mt-[-4rem]' src="./hero2.png" />
</div>
<IoIosArrowDown className='text-4xl animated-bounce   text-primaryPurple  self-center mt-[-7.5rem] z-20	'/>

  </div>
  );
}

export default Hero;
