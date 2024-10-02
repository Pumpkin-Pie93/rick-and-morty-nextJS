import React from 'react';
import Link from "next/link";

import s from './navbar.module.scss';


const Navbar = () => {
  return (
	<div className={s.links}>
	  <Link href={'/'}>Home</Link>
	  <Link href={'/characters'}>Characters</Link>
	</div>
  );
};

export default Navbar;