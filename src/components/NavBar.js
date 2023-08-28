
import React from 'react';
import Link from 'next/link';
import Logo from "./Logo"
import { useRouter } from 'next/router';

const CustomLink = ({href, title, className=""}) =>{
  const router = useRouter();
  return(
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full':'W-0'} `}>&nbsp;</span>
      </Link>
  )
}

const NavBar = () => {

  return (
    <>
      <header className='w-full px-32 py-8 flex items-center justify-between '>
        <nav className=''>
          
          <CustomLink href="/" title="Home" className='mr-4'/>
          <CustomLink href="/about" title="about" className='mx-4'/>
          <CustomLink href="/projects" title="projects" className='mx-4'/>
          <CustomLink href="/articles" title="articles" className='ml-4'/>
        </nav>

        <nav className=''>
          <Link href="/" target={"_blank"}>G</Link>
          <Link href="/" target={"_blank"}>L</Link>
          <Link href="/" target={"_blank"}>I</Link>
          <Link href="/" target={"_blank"}>Face</Link>
          <Link href="/" target={"_blank"}>T</Link>
        </nav>
        <div className='absolute left-[50%] top-2 tranlate-x-[-5-%]'>
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;