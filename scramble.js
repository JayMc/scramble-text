/**
 * scramble.js
 * Given a text string replaces characters in different ways: swap, randomize, reverse, redact
 * Aurthor: Jason McIver
 * Website: jasonmciver.com
 * License: MIT
 */

$.scramble = {
	    id: 'scramble',
	    version: '0.1',
	    defaults: { // default settings
	        redactChar: '?',
	        hashmap: 'qazwsxedcrfvtgbyhnujmikolp 0192837465',
	        type: 'swap',
	        targetWords: [] //if empty apply to entire text, else only apply to words in this array
	    },
	    //hashmap: 'qazwsxedcrfvtgbyhnujmikolp 0192837465',
	        alpha: 'abcdefghihklmnopqrstuvwxyz 1234567890',

	    mask: function(text, opts){
	    	switch(opts.type){
				case 'swap':
					return this.swap(text);
					break;
				case 'reverse':
					return this.reverse(text);
					break;
				case 'shuffle':
					return this.shuffle(text);
					break;
				case 'redact':
					return this.redact(text, opts.redactChar);
					break;
				default:
					return this.swap(text);
					break;
			}

	    },
	    //cat = zqj
	    swap: function(text){
			var hashmapArray = this.defaults.hashmap.split('');
			var secretArray = text.split('');
	    	var mask = '';

			for (var i = 0; i < secretArray.length; i++) {
				mask = mask + hashmapArray[this.alpha.indexOf(secretArray[i])];
			}
			return mask;
	    },

	    //randomize string
	    shuffle: function(text){
			var a = text.split(''),
		    n = a.length;

		    for(var i = n - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var tmp = a[i];
		        a[i] = a[j];
		        a[j] = tmp;
		    }
		    return a.join('');
	    },

	    //cat = tac
	    reverse: function(text){
			var hashmapArray = this.defaults.hashmap.split('');
			var secretArray = text.split('');
	    	var mask = '';

			for (var i = secretArray.length-1; i >= 0; i--) {
				mask = mask + secretArray[i];
			}
			return mask;
	    },

	    //blocks all characters, cat = ???
	    redact: function(text, redactChar){
	    	var secretArray = text.split('');
	    	var mask = '';

	    	for (var i = 0; i < secretArray.length; i++) {
				mask = mask + redactChar;
			}
			return mask;
	    }

	};

	(function ($) {
	    //Attach this new method to jQuery
	    $.fn.extend({

	        scramble: function (params) {
	            //Merge default and user parameters
	            var otherGeneralVars = 'example';

	            return this.each(function () {
	            	//create reference to self
	                var $t = $(this);
	                //combine defaults and defined options
	                var opts = $.extend({},$.scramble.defaults, params);

	                //store real text string before any changes are made, will be used to reveal text on mouseenter
					$t.txt = $(this).text();

					//initial scramble
					$(this).text($.scramble.mask($t.txt, opts));

					//reveal real text
					$(this).mouseenter(function(){
						$(this).text($t.txt);
					})

					//scramble text again
					$(this).mouseleave(function(){
						$(this).text($.scramble.mask($t.txt, opts));
					})

	            });
	        }
        
	    })
	})(jQuery);