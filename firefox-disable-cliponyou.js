// ==UserScript==
// @name        script disable iklan cliponyou kaskus.co.id
// @namespace   https://github.com/emailnya29/disable-cliponyou-kaskus
// @include     http://www.kaskus.co.id/*
// @version     1
// @grant       none
// ==/UserScript==


var $ = unsafeWindow.jQuery;

var clipno = [
   '.clip-on-yu-sidebar',
   '#div-gpt-ad-top-leaderboard_ad_container',
   '.bottom-frame',
   '.cliponyu' 
];

$(document).ready(function(){
    for (i in clipno) { $(clipno[i]).hide(); }
});



