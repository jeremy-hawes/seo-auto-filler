/*
Author: Jeremy Hawes
Title: SEO Auto-Filler
Description: Automatic Fixes for Simple SEO Best Practices
Version: 1.0.4
*/

jQuery(function($) {
	$(document).ready(function() {
		var urlKeyword = 'https://codepen.io',
            defaultAlt = 'Default Alt Tag';

		// Adds Default Alt Tag to All Images Missing One
		$('img').each(function() {
			if ($(this).attr('alt') == '' || !$(this).attr('alt')) {
				$(this).attr('alt', defaultAlt);
			}
		});
		// Adds target _blank to all external links (missing chosen keyword)
		$('a').each(function() {
			$(this).not('[href*="' + urlKeyword + '"]').attr('target','_blank');
		});
		// Adds additional attributes to anchor tags with target="_blank"
		$('a').each(function() {
			if ($(this).attr('target', '_blank')) {
				$(this).attr('rel', 'noopener noreferrer');
			}
		});
		// Force images with http to use https
		$('img[href^="http:"]').each(function(){
			var i = $(this).attr('src');
			var n = i.replace('http://', 'https://');
			$(this).attr('src', function() {
				return n
			});
		});
	});
});