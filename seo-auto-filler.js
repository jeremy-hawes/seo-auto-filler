/*
Author: Jeremy Hawes
Title: SEO Auto-Filler
Description: Automatic Fixes for Simple SEO Best Practices
Version: 1.0.7
URL: https://github.com/jeremy-hawes/seo-auto-filler
*/

jQuery(function($) {
	$(document).ready(function() {
		var urlKeyword = 'https://codepen.io',
            defaultAlt = 'Default Alt Tag';

        $('a').each(function() {
            // Adds target _blank to all external links (missing chosen keyword)
            $(this).not('[href*="' + urlKeyword + '"]').attr('target','_blank');
            // Adds additional attributes to anchor tags with target="_blank"
			if ($(this).attr('target', '_blank')) {
				$(this).attr('rel', 'noopener noreferrer');
			}
            // Removes Title attributes if they are present
            if ($(this).attr('title')) {
				$(this).removeAttr('title');
			}
		});
		// Adds Default Alt Tag to All Images Missing One
		$('img').each(function() {
			if ($(this).attr('alt') == '' || !$(this).attr('alt')) {
				$(this).attr('alt', defaultAlt);
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
        // Remove 'type' attribute from <script> tags (deprecated in html5)
		$('script').each(function(){
			if ($(this).attr('type')) {
				$(this).removeAttr('type');
			}
		});
	});
});