// Won't work on codepen unless codepen's address is HTTP, not HTTPS

var API_KEY = "4334fcbdc100f11d073ef2fc6017110f";
var cel = false;
var wd;

function displayTemp(fTemp, c){
  if(c) return Math.round((fTemp - 32) * (5/9)) + " &#8451";
  return fTemp + " &#8457";
}

function render(wd, cel){
  var currentLocation = wd.name;
  var currentWeather = wd.weather[0].description;
  var currentTemp = displayTemp(wd.main.temp, cel);
  var high = displayTemp(wd.main.temp_max, cel);
  var low = displayTemp(wd.main.temp_min, cel);
  var icon = wd.weather[0].icon;

  $('#currentLocation').html(currentLocation);
  $('#currentTemp').html(currentTemp);
  $('#currentWeather').html(currentWeather);
  $('#high-low').html(high + '/' + low);

  var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
  $('#currentTemp').prepend('<img src="' + iconSrc + '">');
}

$(function(){

  var loc;

  $.getJSON('https://ipinfo.io', function(d){
    loc = d.loc.split(",");
    console.log(loc);


  $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat='
   + loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY, function(apiData){
     wd = apiData;

     render(apiData, cel);

     $('#toggle').click(function(){
          cel = !cel;
          render(wd, cel);
        })

      })

   })

})
