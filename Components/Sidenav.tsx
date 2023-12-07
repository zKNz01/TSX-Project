import React from 'react';
import Fintech from '../assets/fintech.svg';

const Sidenav = () => {
  return (
    <nav
      style={{
        backgroundColor: 'var(--color-01)',
      }}
    >
      <img src={Fintech} alt="" />
    </nav>
  );
};

export default Sidenav;
