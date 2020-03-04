/**
 * @Author: John Isaacs <john>
 * @Date:   01-Apr-182018
 * @Filename: main.js
 * @Last modified by:   john
 * @Last modified time: 21-Dec-182018
 */



$(function() {
  console.log("ready!");
  var x = document.getElementById("demo");




getLocation();



//checkHours(hours);

  function checkHours(hours){

  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {

    mymap.setView([position.coords.latitude, position.coords.longitude], 12);


    var d = new Date(); // for now
    var hours = d.getHours();

    // get today's sunlight times for London
  var times = SunCalc.getTimes(new Date(), position.coords.latitude, position.coords.longitude);
  // format sunrise time from the Date object
  var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
  var timeStr = d.getHours() + ':' + d.getMinutes();
  var sunHours = times.sunrise.getHours();

    var resStr = "Your Location is <br>"+
    "Latitude: " + position.coords.latitude + "<br>"+
    "Longitude: " + position.coords.longitude + "<br>"+
    "Sunrize at your location is: " + sunriseStr + "<br>"+
    "The current time is: " + timeStr + "<br>";
console.log(sunHours + ' : '+hours)
    if(hours >= 11 || hours <= sunHours){
      x.innerHTML = resStr +"<h2>Get on it, the sun is over the yardarm!<h2>"
      var popup = L.popup()
      .setLatLng([position.coords.latitude, position.coords.longitude])
      .setContent("Get Drinking")
      .openOn(mymap);
    }
    else{
      x.innerHTML = resStr + "<h2>Sorry, the sun is still below the yard arm, you should really wait (unless you are a pirate then it's RUM TIME)<h2>"
      var popup = L.popup()
      .setLatLng([position.coords.latitude, position.coords.longitude])
      .setContent("Give no quarter, RUM in the morning")
      .openOn(mymap);
    }


  }
});
