// Auto Use

// Define Class Prefix
var rlySimplePrefix = "rlysimple";

// Jquery
jQuery(document).ready(function() {
	// Calling generic function
	RlySimpleFakeFile("."+rlySimplePrefix+'-fakefile');
})

// Function
function RlySimpleFakeFile(e) {
	rlySimpleCounter = 0;
	$(e).each(function(){
		rlySimpleCounter = rlySimpleCounter+1;

		var rlySimpleId = $(this).attr('id');

		if (rlySimpleId == undefined || rlySimpleId == "") {
			var rlySimpleId = rlySimplePrefix+"fakeid"+rlySimpleCounter;
			$(this).attr('id', rlySimpleId);
		}


		var rlySimpleText = $(this).attr('rlytxt');

		if (rlySimpleText == undefined || rlySimpleText == "") {
			var rlySimpleText = "Upload File";
		}

		$(this).addClass(rlySimplePrefix+"-fakefile"+rlySimpleCounter);

		// Building Fake
		$(this).after("<label class='"+rlySimplePrefix+"-fakediv "+rlySimplePrefix+"-fakediv"+rlySimpleCounter+"' for='"+rlySimpleId+"'>"+rlySimpleText+"<label>");
		
	});

	// Choosing file
	$(e).change(function(){
		var rlySimplePath = $(this).val();

		var rlySimplePath = rlySimplePath.replace("fakepath", "...");

		

		if (rlySimplePath == undefined || rlySimplePath == "") {
			var rlySimpleText = $(this).attr('rlytxt');

			if (rlySimpleText == undefined || rlySimpleText == "") {
				var rlySimpleText = "Upload File";
			}
			$(this).next("."+rlySimplePrefix+"-fakediv").text(rlySimpleText);
		} else {
			$(this).next("."+rlySimplePrefix+"-fakediv").text(rlySimplePath);
		}

	});



};
