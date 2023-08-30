import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon } from "./Icon";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      
      <span
        className={` h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
      
    </Link>
  );
};

const NavBar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 flex items-center justify-between ">
        <nav className="">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="about" className="mx-4" />
          <CustomLink href="/projects" title="projects" className="mx-4" />
          <CustomLink href="/articles" title="articles" className="ml-4" />
        </nav>
        {/*Social Icons */}
        <nav className=" flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 mr-3">
            <GithubIcon  />
            </div>
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 mx-3">
            <TwitterIcon />
            </div>
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 mx-3">
            <PinterestIcon  />
            </div>
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 ml-3">
            <LinkedInIcon  />
            </div>
          </motion.a>
        </nav>
        <div className="absolute left-[50%] top-2 tranlate-x-[-5-%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
