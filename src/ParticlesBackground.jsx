import React from 'react';
import Particles from 'react-tsparticles';
import particle from '../src/Particle';

const ParticlesBackground = ({ init, loaded }) => {
  return (
    <Particles
      id="tsparticles"
      init={init}
      loaded={loaded}
      options={particle} 
    />
  );
};

export default ParticlesBackground;
