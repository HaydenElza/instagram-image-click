// ==UserScript==
// @name         Instagram Image Click
// @namespace    http://elza.me
// @version      0.2
// @description  Click on images on instagram to open in new tab
// @author       Hayden Elza
// @match        https://www.instagram.com/*
// @require      https://code.jquery.com/jquery-latest.js
// @updateURL    https://github.com/HaydenElza/instagram-image-click/raw/master/instagram-image-click.user.js
// ==/UserScript==

(function() {
    function addOnclick() {
        $('._ovg3g').css("display","none");
        var elements = $('._icyx7');
        elements.each(function() {
            var url = $(this).attr('src');
            console.log(url);
            $(this).on("click",function(){window.open(url,'_blank');});
            $(this).addClass("hasEvent");
        });
    }
    $(document).ready(function() {
        addOnclick();
        $(document).on("hover",$('._icyx7'),function(){
            addOnclick();
        });
        $(document).on("click",$('.coreSpriteLeftPaginationArrow'),function(){
            addOnclick();
        });
    });
})();