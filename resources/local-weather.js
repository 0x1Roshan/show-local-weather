$(document).ready(function() {
	if ("geolocation" in navigator){  
        	navigator.geolocation.getCurrentPosition(function(position) { 
        		console.log(position.coords.latitude);
                // $("#result").html("Found your location <br />Lat : "+position.coords.latitude+" </br>Lang :"+ position.coords.longitude);
            });
    }else{
        console.log("Browser doesn't support geolocation!");
    }
});