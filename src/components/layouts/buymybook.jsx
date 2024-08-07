import React from 'react';

function Buymybook() {
 


    const divStyle = {
                                                
        /* Add other background properties as needed */
        height: 'auto',  // Example height, adjust as necessary
        minHeight:'130vh',
        clipPath: 'circle(73.9% at 49% 75%',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Adding box shadow to the bottom
    
      };
    
  
  
  return (
    <div style={divStyle}   className=' flex justify-center  items-center flex-col h-screen bg-secondaryWhite mt-[-16rem] px-6 pt-48 ' >
    
<img alt='book1' data-aos="flip-left" className='w-[60%] z-20 mb-10 ' src='.\book1_1.png'/>
<div data-aos="fade-up" className='font-bold text-4xl text-left '> Everything Is Figureoutable</div>
 <div data-aos="fade-up" className='text-xl my-2 text-left my-6 font-medium text-primaryBlack font_lora	'>It’s more than just a fun phrase to say. It’s a philosophy of relentless optimism. A mindset. A mantra. A conviction. Most important, it’s about to make you unstoppable. Everything is Figureoutable is NOW AVAILABLE in 32 languages.</div>

 <button   data-aos-delay="300" className=' boxshadowbtn_black leading-4 z-10	font_lora	 w-full px-6 text-medium   bg-primaryPurple   font-medium text-primaryPurple mx-4 mb-4 py-4 rounded-full text-white '>BUY MY BOOK</button>

  </div>
  );
}

export default Buymybook;
