import Link from 'next/link';
import React from 'react';
import {motion} from 'framer-motion'

const MontionLink = motion(Link);
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 '>
      <MontionLink href={"/"} className=' w-16 h-16 bg-dark text-light rotate-text hover:rotate-0 transition-transform duration-500 ease-in-out flex items-center justify-center rounded-full text-2xl font-bold' whileHover={{
        backgroundColor:["#121212", "#8A0868","#210B61","#380B61","#FF8000","#0B243B","#0B2F3A","#424242", "#121212"],
        transition:{duration:2, repeat:Infinity}
      }}>EES</MontionLink>
    </div>
  );
};

export default Logo;