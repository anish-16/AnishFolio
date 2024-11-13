import React from 'react';
import Particles from 'react-tsparticles';
import particle from './Particle'; // Correct import for particle.js

const ParticlesBackground = ({ init, loaded }) => {
  return (
    <Particles
      id="tsparticles"
      init={init}
      loaded={loaded}
      options={particle} // Use the particle configuration
    />
  );
};

export default ParticlesBackground;
