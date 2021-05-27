"use strict";

const monitor = {
  sizes: {
    height: {
      value: 20,
      scale: "cm",
    },
    width: {
      value: 56.5,
      scale: "cm",
    },
  },
  model: {
    company: "Samsung",
    type: "S222222",
  },
  brightness: 200,
  contrast: 100,
  color: "black",
  dpi: 200,
  resolution: "4K",
};

console.log(monitor.sizes.height.value);

//const monitorBright = monitor.brightness;

const { brightness, dpi, resolution, contrast } = monitor;

const {
  sizes: {
    height: { value: heightValue, scale: scaleValue1 },
    width: { value: widthValue, scale: scaleValue2 },
  },
  model: { company: company, type: type },
} = monitor;

const { color, ...restOfMonitor } = monitor;

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = nums;

function getFullName({firstname, lastname}) {
  return `${firstname} ${lastname}`;
}
function getMonitorInfo( {dpi, color}) {
  return `${dpi} ${color}`;
}
