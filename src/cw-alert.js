/*
 * CW Alert
 * 
 *
 * Copyright (c) 2014 Clive Walkden
 * Licensed under the MIT license.
 */

(function($){
	$.fn.CWAlert = function(custom) {
		// Default plugin settings
		var defaults = {
			message         : 'Are you sure?',
			beforeMessage   : function(){},
			messageTrue     : function(){},
			messageFalse    : function(){}
		};

		// Merge default and user settings
		var settings = $.extend({}, defaults, custom);

		var self = this;

		// Loop through each link and update the href
		self.each(function(){
			var $this = $(this);

			// Overwrite the default message if one is passed as a data attribute
			if($this.data('message')){
				settings.message = $this.data('message');
			}

			// When the link is clicked
			$this.on('click',function(e){
				e.preventDefault();

				if (settings.beforeMessage){
					settings.beforeMessage.call(this);
				}

				if(confirm(settings.message)){
					if (settings.messageTrue){
						settings.messageTrue.call(this);
					}
					window.location=$this.attr('href');
				}else{
					if (settings.messageFalse){
						settings.messageFalse.call(this);
					}
					return false;
				}
			});
		})
	}
})(jQuery);