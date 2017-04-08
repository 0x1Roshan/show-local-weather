$( document ).ready( function() {
	var latitude;
	var longitude;
	var city;
	var country;

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
					console.log( response );
				}	
			});
		},
	});
});

function putLocation( data ) {
	$(".city").html( data.city );
	$(".country").html( data.country );
}