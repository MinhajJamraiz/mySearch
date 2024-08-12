import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>MYSearch</Link>
        </div>
        <div className='links'>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/about/team'>Team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
