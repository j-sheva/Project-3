import React from 'react';
import './Hero.css';

const Hero = ({ theme }) => {
  return (
    <div className="hero">
      <img
        className="men"
        src="/images/men.png"
        alt="3 men in the restuarant"
      />

      <div className={`hero__header-wrapper ${theme}`}>
        <h1 className={`hero__header ${theme}`}>The News Magazine</h1>
      </div>
      <div className="hero__text-wrapper">
        <p className="hero__text">
          Lorem ipsum dolor sit amet consectetur. Nisl tortor mattis egestas
          risus. Nisl imperdiet ultrices justo erat phasellus non placerat arcu
          faucibus. Semper aenean vulputate sem sit aliquam mi metus. Turpis
          odio et arcu vel id ullamcorper. <br /> <br /> Lorem ipsum dolor sit
          amet consectetur. Nisl tortor mattis egestas risus. Nisl imperdiet
          ultrices justo erat phasellus non placerat arcu faucibus. Semper
          aenean vulputate sem sit aliquam mi metus. Turpis odio et arcu vel id
          ullamcorper.
        </p>
      </div>
      <img className="man" src="/images/man.png" alt="a man with a hat" />
    </div>
  );
};

export default Hero;
