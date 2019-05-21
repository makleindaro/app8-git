//JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready", onDeviceready, false);
	
});

function onDeviceready(){
	
	$('#posicion').on ('click', function(){
	getPosition ();
	});
}

function getPosition(){
	var options = {
		enableHighAccuracy : true,
		maximumAge: 3600000
	}
	
	var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
	function onSuccess(position) {
		
		alert('latitude:' + position.coords.latitude +'\n'+
		'Longitude;' +  position.coords.longitude +'\n');
	};
	
	function onError(error){
		alert('code:' + error.code + '\n' + 'message:'+ error.message + '\n');
	}
}