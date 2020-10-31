// ==UserScript==
// @name         Instagram Image Click
// @namespace    http://elza.me
// @version      1.2
// @description  Click on images on instagram to open in new tab
// @author       Hayden Elza
// @match        https://www.instagram.com/*
// @require      https://code.jquery.com/jquery-latest.js
// @updateURL    https://github.com/HaydenElza/instagram-image-click/raw/master/instagram-image-click.user.js
// ==/UserScript==

(function() {
    // Open image in new tab
    function addOnclick() {
        $('._9AhH0').css("display","none");
        var elements = $('.FFVAD');
        elements.each(function() {
            var url = $(this).attr('src');
            console.log(url);
            if ($(this).hasClass("hasEvent")) {
                $(this).off();
            }
            $(this).on("click",function(){window.open(url,'_blank');});
            console.log(url);
            $(this).addClass("hasEvent");
        });
    }
    $(document).ready(function() {
        if ($('html').attr('class').includes('not-logged-in')) {
            console.log('not logged in');
            // No login
            // https://github.com/dankdave69/userscripts/blob/main/Instagram%20Pop-up%20Remover.user.js
            // version: 0.9
            'use strict';
            var body = document.getElementsByTagName("body")[0];
            var popUp = document.getElementsByClassName("RnEpo  _Yhr4");
            var button = document.createElement('button');

            setInterval(function openLinks() {
                var list = document.querySelectorAll("a");
                for (var i = 0; i < list.length; i++) {
                    list.item(i).onclick = function() {
                        location.href = this.href;
                    };
                };
            }, 0);

            function remove() {
                body.style.overflow = "visible";
                popUp[0].remove();
            };

            function appendButton() {
                var winX = document.documentElement.clientWidth;
                var winY = document.documentElement.clientHeight;
                var buttonX = (winX / 2) + 200 - 45;
                var buttonY = (winY / 2) - 235.5 + 18.5;

                button.style = "position:fixed; top:" + buttonY + "px; left:" + buttonX + "px; background-color: white; border: none; color: #8e8e8e; padding: 0px 0px; text-align: center; text-decoration: none; font-family: ; display: inline-block; font-size: 20px; margin: 0px 0px; cursor: pointer; width: 30px; height: 30px";
                button.innerHTML = "&#10006;"
                button.onclick = function() {
                    remove();
                }

                popUp[0].appendChild(button);
            }

            function checkExist() {
                if (popUp.length > 0) {
                    appendButton();
                    window.addEventListener('resize', appendButton);
                };
            };

            setInterval(checkExist, 500);
        }
        addOnclick();
        $(document).on("hover",$('.FFVAD'),function(){
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
