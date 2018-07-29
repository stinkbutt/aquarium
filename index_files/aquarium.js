function get_temp_info(){	
	var alex;

	$.get( "temp.txt", function( data ) {
	   $('#temp').html(data);
	   var alex = data;
	   return alex;
	});

	return alex;
}

function tits(){
	var a = get_temp_info();
	console.log(a);
}

function old_get_temp_info(){
	$.get( "temp.txt", function( data ) {
	  $( "#temp" ).html( data );
	  // alert( "Load was performed." );
	});
}
