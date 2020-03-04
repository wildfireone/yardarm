/**
 * @Author: John Isaacs <john>
 * @Date:   21-Dec-182018
 * @Filename: map.js
 * @Last modified by:   john
 * @Last modified time: 21-Dec-182018
 */
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
//OpenStreetMap_Mapnik.addTo(mymap);

var mapboxMap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.pirates',
    accessToken: 'pk.eyJ1Ijoid2lsZGZpcmVvbmUiLCJhIjoiNTEzOTJhYTZkNWU0MjI5ZGNkNjY0MzAxZGZkMjY1ODgifQ.AHs9fx75HBgR3ZJHekLgRw'
})
mapboxMap.addTo(mymap);
