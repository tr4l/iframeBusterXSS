/**
 * @author Phyo
 */
(function() {
	function getParameterByName(name) {
		'use strict';

		name = name.replace('/[\\[]/', '\\[').replace('/[\\]]/', '\\]');
		var regexS = '[\\?&]' + name + '=([^&#]*)', regex = new RegExp(regexS), results = regex.exec(window.location.search);
		if (results) {
			var host = '', result = results[1].replace(/\+/g, ' ');
			try {
				host = decodeURIComponent(result);
				return decodeURIComponent(host);
			} catch (error) {
				return '';
			}
		}
	}
	
	function randomize() {
		'use strict';
		
		var text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	    for( var i=0; i < 10; i++ ) {
	    	text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	
	    return text;
	}

	if ( typeof String.prototype.startsWith != 'function') {
		// see below for better implementation!
		String.prototype.startsWith = function(str) {
			return this.indexOf(str) === 0;
		};
	}
	function writeContent() {
		'use strict';
		// getScriptTag
		var scriptTag,
		// knxDomain = '//sv.brand-display.com/';
		// http://54.251.120.185/ae-cms/api/
		// knxDomain = '//localhost:8080/adedge-serving/api/bd/serving/simple/js2', scriptSrc, targetIframeSrc,
		// knxDomain = '//54.251.120.185/ae-cms/api/bd/serving/simple/js2', scriptSrc, targetIframeSrc,
		knxDomain = '//sv.brand-display.com/adedge/api/bd/serving/simple/js2', scriptSrc, targetIframeSrc,
		aukey = getParameterByName('aukey'), click=getParameterByName('click');

		scriptSrc = knxDomain + '?aukey=' + aukey;
		if (typeof click !== 'undefined' && click !== null) {
			scriptSrc += '&click=' + click;
		}
		scriptSrc = window.location.protocol + scriptSrc;
		
		targetIframeSrc = '//sv.brand-display.com/adedge/api/bd/get';
		
		var iframes = top.document.body.getElementsByTagName('IFRAME'), frame = null;
		for (var i = 0; i < iframes.length; i++) {
			if (iframes[i].src.indexOf(targetIframeSrc) > -1) {
				if (iframes[i].src.indexOf(aukey) > -1) {
					frame = iframes[i];	
				}
			}
		}
		
		if (frame != null) {
			frame.style.display  = 'none';
			var wrapperDivId = randomize();
			var wrapperDiv = window.top.document.createElement('div');
			wrapperDiv.setAttribute('id', wrapperDivId);
			frame.parentNode.insertBefore(wrapperDiv, frame);
			
			scriptSrc += '&wrap=' + wrapperDivId;
			var contentScript = window.top.document.createElement('script');
			contentScript.src = scriptSrc;
			frame.parentNode.insertBefore(contentScript, frame);
		}
	}

	window.onload = function () {
		writeContent();
	};

})();