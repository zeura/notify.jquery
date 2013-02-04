// JQuery Notify by Antonio Villamarin <http://ant.onio.org> : MIT
(function(e){
	jQuery.fn.extend({
		notify:function(options){
			this.options = $.extend({
				active: true,
				close: false,
				color: "#888",
				background: "#FF9",
				opacity: ".9"
			}, options);
			
			var nclose = this.options.close;
			
			$('body').append('<span class="notify-arrow"></span>');
			
			$(this).prepend('<span class="notify-close"></span>');
			
			$(this).addClass('notify-message');
			
			if( this.options.close ) {
				$('head').append("<style>.notify-arrow:before{display:block;font-size:20px;padding:5px 15px;content:'\\25BE';color:"+this.options.color+";}"+".notify-close:before{display:block;font-size:24px;float:right;margin:-7px -5px -7px 20px;content:'\\00D7';color:"+this.options.color+";}<\/style>");
			} else {
				$('head').append("<style>.notify-arrow:before{display:block;font-size:20px;padding:5px 15px;content:'\\25BE';color:"+this.options.color+";}"+".notify-close:before{display:block;font-size:20px;float:right;margin:-7px -5px -7px 20px;content:'\\25B4';color:"+this.options.color+";}<\/style>");
			}

			$('.notify-message')
				.css('background-color',this.options.background)
				.css('z-index','101')
				.css('position','absolute')
				.css('top','0')
				.css('right','0')
				.css('left','0')
				.css('font-weight','bold')
				.css('font-size','16px' )
				.css('padding','10px 20px')
				.css('overflow','hidden')
				.css('box-shadow','0 0 5px #444')
				.css('opacity',this.options.opacity);

			$('.notify-arrow')
				.css('background-color',this.options.background)
				.css('z-index','101')
				.css('position','absolute')
				.css('top','0')
				.css('right','50px')
				.css('overflow','hidden')
				.css('box-shadow','0 0 5px #444')
				.css('opacity',this.options.opacity)
				.css('border-radius','0 0 5px 5px');
			
			if( this.options.active ) {
				$('.notify-message').show();
				$('.notify-arrow').hide();
			} else {
				$('.notify-message').hide();
				if( !this.options.close ) {
					$('.notify-arrow').show();
				} else {
					$('notify-arrow').hide();
				}
			}
			$('.notify-arrow').click(function(){
				$(this).slideUp('slow');
				$('.notify-message').delay(500).slideDown('slow');
			});
			$('.notify-close').click(function(){
				$('.notify-message').slideUp('slow');
				if( !nclose ) {
					$('.notify-arrow').delay(500).slideDown('slow');
				}
			});
		}
	})
})(jQuery);
