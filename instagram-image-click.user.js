// ==UserScript==
// @name         Instagram Image Click
// @namespace    http://elza.me
// @version      0.1
// @description  Click on images on instagram to open in new tab
// @author       Hayden Elza
// @match        https://www.instagram.com/*
// @require      https://code.jquery.com/jquery-latest.js
// @updateURL    https://github.com/HaydenElza/instagram-image-click/raw/master/instagram-image-click.user.js
// ==/UserScript==

(function() {    
    function addOnclick() {
        var elements = $('._ovg3g');
        elements.each(function() {
            var reactid = $(this).attr('data-reactid');
            if (reactid.indexOf("=1jpg") > -1 && $(this).hasClass("hasEvent") === false) {
                var url = reactid.replace("=2",":").replace(/=1/g,".").replace(/.*\$/,"").replace(/\?.*/,"");
                $(this).on("click",function(){window.open(url,'_blank');});
                $(this).addClass("hasEvent");
            }
        });
    }
    $(document).ready(function() {
        addOnclick();
        $(document).on("hover",$('._ovg3g'),function(){
            addOnclick();
        });
        $(document).on("click",$('.coreSpriteLeftPaginationArrow'),function(){
            addOnclick();
        });
    });
})();