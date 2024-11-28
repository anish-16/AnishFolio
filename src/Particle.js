const particle = {
  background: {
    color: {
      value: "000000",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE"],
    },
    links: {
      color: {
        value: ["#ADD8E6", "#FFFF00", "#90EE90", "#FFA500"],
      },
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 70,
    },
    opacity: {
      value: 0.9,
      random: true,
    },
    shape: {
      type: "polygon",
      polygon: { 
        nb_sides: 6,
      },
    },
    size: {
      random: true,
      value: 6,
    },
    life: {
       duration: 
       { sync: false,
         value: 5,
         },
       },
  },
  detectRetina: true,
};

export default particle;
