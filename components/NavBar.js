
import React from 'react';
import Link from 'next/link';
import Logo from "../components/Logo"


const NavBar = () => {
    
  return (
    <>
    <header className = 'w-full px-32 py-8 flex items-center justify-between'>
      <nav className='bg-slate-600'>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
        <Link href="/articles">articles</Link>
      </nav>
      <Logo/>
      <nav className='bg-purple-600'>
      <Link href="/" target={"_blank"}>G</Link>
      <Link href="/" target={"_blank"}>L</Link>
      <Link href="/" target={"_blank"}>I</Link>
      <Link href="/" target={"_blank"}>Face</Link>
      <Link href="/" target={"_blank"}>T</Link>
      </nav>
    </header>
    </>
  );
};

export default NavBar;