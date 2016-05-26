// exports.Temperature = function() {
//
// };

exports.convertCelsius = function(response) {
  var celsius = Math.round(response.main.temp- 273.15);
  return celsius;
};

exports.convertFahrenheit = function(response) {
  var fahrenheit = Math.round((response.main.temp*9 / 5) - 459.67);
  return fahrenheit;
};
