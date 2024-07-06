import React from 'react';

function Learnwithme() {
  


    const divStyle = {
        backgroundImage: `linear-gradient(180deg, #70198A 1%, rgba(17, 17, 17, 75%) 100%), url(${process.env.PUBLIC_URL}/skybg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /* Add other background properties as needed */
        height: 'auto',
        minHeight:'100vh'  // Example height, adjust as necessary
      };

  
  return (
    <div  style={divStyle} className=' flex flex-col items-center justify-around h-screen bg-center bg-cover pt-36 mt-[-8rem]' >
     <h1 data-aos="fade-in" className='text-3xl text-center text-secondaryGreen p-2 font_Kaushan'>What You Learn with Me </h1>
  <div className='text-white flex flex-col text-center items-center justify-around mb-6'>
    <img alt="heart" data-aos="zoom-in" className="w-24" src="./heart.png" />
    <div  data-aos="zoom-in" className='text-xl mb-2'>Authenticity and Self-Love</div>
    <div data-aos="zoom-in" className='font_nunito px-4'>Discover how to be true to yourself, fostering a path to self-love and self-awareness.</div>
  </div>


  <div className='text-white flex flex-col text-center items-center justify-around mb-6'>
  <img alt="healing" data-aos="zoom-in" className="w-24" src="./healing.png" />

    <div data-aos="zoom-in" className='text-xl mb-2'>Healing Relationships</div>
    <div data-aos="zoom-in" className='font_nunito px-4'>Heal from past wounds related to relationships (love, family, friends, and toxic managers) and build a healthy, loving relationship circle.</div>
  </div>



  <div className='text-white flex flex-col text-center items-center justify-around mb-6'>
  <img alt="mind" data-aos="zoom-in" className="w-24" src="./heart.png" />

    <div data-aos="zoom-in"  className='text-xl mb-2 '>Conscious Growth</div>
    <div  data-aos="zoom-in" className='font_nunito px-4'>Expand your consciousness and become more aware of your reality, enabling you to take control over your destiny.</div>
  </div>
  </div>
  );
}

export default Learnwithme;
