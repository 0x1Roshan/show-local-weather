var currentTemp = 0;

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

	currentTemp = tempCelcius;

	$(".temperature").html( tempCelcius + " &#8451;" );
	$(".description").html( data.weather[0].description );
}

$('input[type=radio][name=temp_metric]').change( function() {
	
	var metric = this.value;


	if ( metric == "f") {
		currentTemp = Math.round(( currentTemp * 9 / 5) + 32);
		$( ".temperature").html( currentTemp + " &#8457;");
		
	} else if ( metric == "c" ) {
		currentTemp = Math.round((currentTemp - 32 ) * 5 / 9);
		$( ".temperature").html( currentTemp + " &#8451;");
	}
});
