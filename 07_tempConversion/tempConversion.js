const convertToCelsius = function(tempF) {
  return Math.round(((tempF - 32) * .5556) * 10) / 10;
};

const convertToFahrenheit = function(tempF) {
  return Math.round(((tempF * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
