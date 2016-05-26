var apiKey = require('./../.env').apiKey;
var temp = require('../js/temperature.js');
$(document).ready(function() {
  $(".showTempcelsius").hide();
  $(".showTempFahrenheit").hide();
  $("#fahrenheitHide").hide();
  $("#celsiusHide").hide();

  $('#temperatureButton').click(function() {
    $(".showTempcelsius").show();
    $(".showTempFahrenheit").hide();
    $("#fahrenheitHide").show();
    $("#celsiusHide").show();
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var celsius = temp.convertCelsius(response);
      var fahrenheit = temp.convertFahrenheit(response);

      $('.showTempKelvin').text("The temperature in " + city + " is " + response.main.temp + " degrees Kelvin!\n");
      $('.showTempcelsius').text("\nThe temperature in " + city + " is " + celsius + " degrees celsius!\n");
      $('.showTempFahrenheit').text("The temperature in " + city + " is " + fahrenheit + " degrees Fahrenheit!");

      console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.showTemp').text(error.responseJSON.message);
    });
  });

  $('#celsiusHide').click(function(){
    $(".showTempcelsius").hide();
    $(".showTempFahrenheit").show();
    // $("#fahrenheitHide").show();
    // $("#celsiusHide").hide();
  });

  $('#fahrenheitHide').click(function() {
    $(".showTempcelsius").show();
    $(".showTempFahrenheit").hide();
    // $("#fahrenheitHide").hide();
    // $("#celsiusHide").show();
  });


// if($('#celsiusHide').click()){
//   $(".showTempcelsius").hide();
//   $(".showTempFahrenheit").show();
//
// }else if ($('#fahrenheitHide').click()) {
//   $(".showTempcelsius").show();
//   $(".showTempFahrenheit").hide();
// }
  // $('#celsiusHide').click(function() {
  //   $(".showTempcelsius").toggle();
  // });

});
