/*
Author: Jeremy Hawes
Title: SEO Auto-Filler
Description: Automatic Fixes for Simple SEO Best Practices
Version: 1.0.0
*/

$(document).ready(function(){
    var defaultAlt = 'Default Alt Tag';
    
    // Adds Default Alt Tag to All Images Missing One
    $('img').each(function(){
        if($(this).attr('alt') == '' || ! $(this).attr('alt')) {
            $(this).attr('alt', defaultAlt);
        }
    });

    // Adds additional attributes to anchor tags with target="_blank"
    $('a').each(function(){
        if($(this).attr('target')) {
            $(this).attr('rel','noopener noreferrer');
        }
    });
});