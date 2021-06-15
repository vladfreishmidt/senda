import React from 'react';
import s from './Header.module.css';

const Header = () => {
   return (
      <header className={s.header}>
         <a href="/" className={s.logo}>senda.</a>
      </header>
   )
}

export default Header;