// ==UserScript==
// @name         Chapters In Youtube
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A script to add the chapter title of a video to the screen.
// @author       Re'Jaad
// @match        https://*.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
// © Copyright 2022 Re'Jaad

//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at

//http://www.apache.org/licenses/LICENSE-2.0

//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

(function() {

    'use strict';

    window.addEventListener("load", function () {

        var c = document.querySelector(".ytp-chapter-title-content");

        if (c) {

            setInterval(function () {

                var chapterElement = document.querySelector(".ytp-chapter-title-content");

                var chapter = chapterElement.innerText;

                console.log (chapter);

                let cptr = document.createElement("p")

                cptr.innerText = chapter

                document.querySelector(".video-custom-annotations").append(cptr);

                setTimeout(() => {

                    cptr.parentNode.removeChild(cptr)

                }, 2000)

            }, 2000)



        }

    }, false)

})();