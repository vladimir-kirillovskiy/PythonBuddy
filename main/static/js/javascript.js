//jQuery all client side
$(document).ready(function(){
	$('#code_textarea').bind('keypress', function(e) {
		if(e.keyCode==13){
			console.log('test');
			$.getJSON('/check_code', {
		      text :  $('textarea#code_textarea').val()
		    }, function(data) {
		    	console.log("hi");
		      //$('#append_text').replaceWith(text);
		    });
		    return false;
		  };
	});
});
