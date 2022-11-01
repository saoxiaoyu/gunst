// ==UserScript==
// @name        计算机学习
// @namespace   Violentmonkey Scripts
// @match       https://gnust.rymooc.com/course/learn/17
// @grant       none
// @version     1.0
// @author      wy
// @description 2022/10/29 23:31:37
// ==/UserScript==
(function() {
    'use strict';
    console.log(document.querySelector("video").play());
    console.log(document.querySelector("video").currentTime=99999);
    console.log(document.getElementsByClassName('btn btn-itembar btn-nextLessonItem')[0].click());
    var abc = 4;
    console.log(document.getElementsByClassName('btn btn-itembar btn-nextLessonItem')[0].click());
})();