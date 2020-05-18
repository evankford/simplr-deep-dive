/**
 * External Dependencies
 */
import 'jquery';
import '@babel/polyfill'
import 'lazysizes';
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import objectFitImages from 'object-fit-images';
objectFitImages();

function initModules(parent = document) {
  Array.from(parent.querySelectorAll("[data-module]")).forEach((el) => {
    const name = el.getAttribute("data-module");
    const Module = require(`./modules/${name}`).default;
    new Module(el);
  });
}

var replacers = [
  {find: '®', wrap:'sup'}
];

import findAndReplaceDOMText from "@thehonestscoop/findandreplacedomtext";

function findAndReplaceText() {
  replacers.forEach(replacer => {
    console.log("Replacing");
    console.log(replacer);
    findAndReplaceDOMText(document.body, replacer)
  })
}


$(document).ready(() => {
  // console.log('Hello world');
    initModules();
    findAndReplaceText();

});

