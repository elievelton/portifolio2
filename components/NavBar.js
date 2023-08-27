import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <>
    <header className=' w-full px-32 py-8 flex items-center justify-between'>
      <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
        <Link href="/articles">articles</Link>
      </nav>
      <h2>Logo</h2>
      <nav>
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