"use strict";

let pos_1 = 0;
let pos_2 = 0;
let ertek_1 = 0;
let ertek_2 = 0;
let mozgat_1 = 0;
let mozgat_2 = 0;
let mozgat = function() {}; 
let elem_1 = document.getElementById("animate_1");
let elem_2 = document.getElementById("animate_2");
let elem_3 = document.getElementById("animate_3");
let elem_4 = document.getElementById("animate_4");

function myStop() {
    window.clearInterval(mozgat);
    if (mozgat_1 > 0) {
        pos_2 = 1400 - ertek_1;
        mozgat_1 = 0; 
    } else if (mozgat_2 > 0){
        pos_1 = 1400 - ertek_2;
        mozgat_2 = 0;
    }
}

function myMoveleft() {
    mozgat_1 ++;

    mozgat = window.setInterval(frame, 5);

    function frame() {
        ertek_1 = pos_1 % 1400;
        if (ertek_1 < 350) {
            pos_1 ++;
            topLeft(-1, 0, 350, ertek_1);
            /*elem_1.style.top = `${ertek}px`;
            elem_2.style.left = `${ertek}px`;
            elem_3.style.top = `${350-ertek}px`;
            elem_4.style.left = `${350-ertek}px`;*/
        } 
        else if (ertek_1 < 700) {
            pos_1 ++;
            leftTop(-1, 350, 700, ertek_1);
            /*elem_1.style.left = `${ertek-350}px`;
            elem_2.style.top = `${700-ertek}px`;
            elem_3.style.left = `${700-ertek}px`;
            elem_4.style.top = `${ertek-350}px`;*/
        }
        else if (ertek_1 < 1050) {
            pos_1 ++;
            topLeft(1, 1050, 700, ertek_1);
            /*elem_1.style.top = `${1050-ertek}px`;
            elem_2.style.left = `${1050-ertek}px`;
            elem_3.style.top = `${ertek-700}px`;
            elem_4.style.left = `${ertek-700}px`;*/
        }
        else if (ertek_1 < 1400) {
            pos_1 ++;
            leftTop(1, 1400, 1050, ertek_1);
            /*elem_1.style.left = `${1400-ertek}px`;
            elem_2.style.top = `${ertek-1050}px`;
            elem_3.style.left = `${ertek-1050}px`;
            elem_4.style.top = `${1400-ertek}px`;*/
        }
    }
}

function myMoveright() {
    mozgat_2 ++;

    mozgat = window.setInterval(frame, 5);

    function frame() {
        ertek_2 = pos_2 % 1400;
        if (ertek_2 < 350) {
            pos_2 ++;
            leftTop(-1, 0, 350, ertek_2);
            /*elem_1.style.top = `${ertek}px`;
            elem_2.style.left = `${ertek}px`;
            elem_3.style.top = `${350-ertek}px`;
            elem_4.style.left = `${350-ertek}px`;*/
        } 
        else if (ertek_2 < 700) {
            pos_2 ++;
            topLeft(-1, 350, 700, ertek_2);
            /*elem_1.style.left = `${ertek-350}px`;
            elem_2.style.top = `${700-ertek}px`;
            elem_3.style.left = `${700-ertek}px`;
            elem_4.style.top = `${ertek-350}px`;*/
        }
        else if (ertek_2 < 1050) {
            pos_2 ++;
            leftTop(1, 1050, 700, ertek_2);
            /*elem_1.style.top = `${1050-ertek}px`;
            elem_2.style.left = `${1050-ertek}px`;
            elem_3.style.top = `${ertek-700}px`;
            elem_4.style.left = `${ertek-700}px`;*/
        }
        else if (ertek_2 < 1400) {
            pos_2 ++;
            topLeft(1, 1400, 1050, ertek_2);
            /*elem_1.style.left = `${1400-ertek}px`;
            elem_2.style.top = `${ertek-1050}px`;
            elem_3.style.left = `${ertek-1050}px`;
            elem_4.style.top = `${1400-ertek}px`;*/
        }
    }
}


function topLeft(elojel, a, b, ertek) {
    elem_1.style.top = `${elojel*(a-ertek)}px`;
    elem_2.style.left = `${elojel*(a-ertek)}px`;
    elem_3.style.top = `${elojel*(ertek-b)}px`;
    elem_4.style.left = `${elojel*(ertek-b)}px`;
}

function leftTop(elojel, a, b, ertek) {
    elem_1.style.left = `${elojel*(a-ertek)}px`;
    elem_2.style.top = `${elojel*(ertek-b)}px`;
    elem_3.style.left = `${elojel*(ertek-b)}px`;
    elem_4.style.top = `${elojel*(a-ertek)}px`;
}

