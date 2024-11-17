import React, { FC } from 'react';
import s from './Footer.module.scss';

const Footer: FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={s.footer}>
      <span className={s.nameYear}>Tetiana - {year}</span>
    </footer>
  );
};

export default Footer;
