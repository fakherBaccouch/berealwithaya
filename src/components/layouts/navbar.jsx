import React from 'react';

function Navbar() {

 
  return (
    <div className="flex items-center 	 p-4 py-6 justify-between">
<div className=' w-12 h-6 animate-testes'><img alt="logo" className=" w-full h-full"src='./logo.png'/></div>
<div className=' p-2  '>
  <div className='w-6 h-0.5 bg-primaryBlack rounded-full mb-1'></div>
  <div className='w-6 h-0.5 bg-primaryBlack rounded'></div>

</div>
  </div>
  );
}

export default Navbar;
