// ==UserScript==
// @name         Instagram Image Click
// @namespace    http://elza.me
// @version      1.0
// @description  Click on images on instagram to open in new tab
// @author       Hayden Elza
// @match        https://www.instagram.com/*
// @require      https://code.jquery.com/jquery-latest.js
// @updateURL    https://github.com/HaydenElza/instagram-image-click/raw/master/instagram-image-click.user.js
// ==/UserScript==

(function() {
    function addOnclick() {
        $('._si7dy').css("display","none");
        var elements = $('._2di5p');
        elements.each(function() {
            var url = $(this).attr('src');
            console.log(url);
            if ($(this).hasClass("hasEvent")) {
            } else {
                $(this).on("click",function(){window.open(url,'_blank');});
                $(this).addClass("hasEvent");
            }
        });
    }
    $(document).ready(function() {
        addOnclick();
        $(document).on("hover",$('._2di5p'),function(){
            addOnclick();
        });
        $(document).on("click",$('.coreSpriteLeftPaginationArrow'),function(){
            addOnclick();
        });
        $(document).on("click",$('.coreSpriteLeftChevron'),function(){
            addOnclick();
        });
    });
})();
