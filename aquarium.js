function get_temp_info(){
	$.get( "temp.txt", function( data ) {
	  var alex = data;
	  alex.split(':');

	  $( "#temp" ).html( alex [3] );
	  // alert( "Load was performed." );
	});
}