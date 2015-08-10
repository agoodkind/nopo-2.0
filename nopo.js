(function($) {
	$.fn.noPo = function(tag) { //pass the tag in
		var tagPage = false;
		if (window.location.pathname.split("/")[1] == 'tagged') { //check if we are in the tag page
			tagPage = true;
		}
		if (tagPage === false) { //if we arent in the tag page continue with execution
			var noPoSelector = $(this); //set the variable noposelector to whatever the $ function was called on
			if (tag == undefined) { //if tag is undefined run with defaults
				tag = '.x';
			}
			if (this.selector.length == 0) { //if the selector length is undefined run with defaults
				noPoSelector = $('.nopo');
			}
			noPoSelector.siblings(tag).each(function() { //remove tags from each sibiligin in the tag
				$(this).remove();
			})
		}
		return this; //return ourself bc we want to be able to chain our function :')
	}
	$(function() {
		$().noPo(); //run nopo for the first time after dom loads
	});
})(jQuery);
