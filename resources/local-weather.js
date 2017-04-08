$( document ).ready( function() {
	var latitude;
	var longitude;

	$.ajax({
		dataType: "json",
		url: "http://ip-api.com/json",
		success: function( data ) {
			latitude = data.lat;
			longitude = data.lon;
		
			putLocation( data );

			$.ajax({
				dataType: "json",
				url:"http://api.openweathermap.org/data/2.5/weather?lat="
				+latitude+"&lon="+ longitude + "&appid=fe99cd3d99dc8b934cb6774f84389ab5",				
				success: function( response ) {
					putWeatherData( response );
				}	
			});
		},
	});
});

function putLocation( data ) {
	$(".city").html( data.city );
	$(".country").html( data.country );
}

function putWeatherData( data )
{
	tempCelcius = data.main.temp - 273.15;
	$(".temperature").html( tempCelcius + " &#8451;" );
}