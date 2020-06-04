/**
 * External Dependencies
 */
import 'jquery';
import '@babel/polyfill'
import 'lazysizes';
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import Animator from "./components/gsapUtilities";

import objectFitImages from 'object-fit-images';
import findAndReplaceDOMText from "@thehonestscoop/findandreplacedomtext";

import {
  TimelineMax,
  gsap
} from "gsap/all";
import { DrawSVGPlugin } from "./components/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

objectFitImages();


var replacers = [
  {find: '®', wrap:'sup'}
];

$(document).ready(() => {

    var authWallEl = document.querySelector("[data-module=authwall]");
    var Authwall = require('./modules/authwall').default;
    new Authwall(authWallEl)



});

class App {
  constructor() {
  }
  init() {
    this.initModules();
    this.findAndReplaceText();
    this.setupScenes()
    this.megaTL = new TimelineMax();
  }
  setupScenes() {
    this.scenes = document.querySelectorAll('[data-scene]');

    this.scenes.forEach(scene => {
      console.log(scene)
      var animator = new Animator(scene);
      console.log(animator)

    })

    this.checkExpanded();
    this.checkChat();
    this.checkIntro();
  }

  checkIntro() {
    this.intro = document.querySelector('[data-scene="intro"]');
    if (this.intro) {
      this.introButton = this.intro.querySelector('[data-button-scene]');
      if (this.introButton) {
        this.introButton.addEventListener('click', () => {
          this.intro.setAttribute('data-status', 'post');
          setTimeout(() => {
            this.chat.setAttribute('data-status', 'current');
            this.chat.dispatchEvent(new Event('doChat'))
            this.intro.classList.add('hidden')
          }, 1000);
        })
      }
    } else {

    }
  }

  checkChat() {
    this.chat = document.querySelector('[data-scene="chat"]');
    this.convo = document

    if (this.chat) {
      this.chat.addEventListener("doChat", this.doChat);
    }
  }

  doChat() {

    let chatTL = new TimelineMax();
    const chatOuter = this.chat.querySelector('.chat-outer');
    if (!chatOuter.classList.contains('loaded')) {

      chatOuter.classList.add('loaded');
      const chatInner = chatOuter.querySelector(".chat-inner");
      let chatHt = chatInner.getBoundingClientRect().height;
      let chatTop = chatInner.getBoundingClientRect().top;

      let chats = chatInner.children;
      let offsets = [];
      let offsetsOuter = [];
        chats.forEach(el => {
          offsets.push(
            (
              (1 - (el.getBoundingClientRect().top - chatTop) / chatHt + 0.02) *
              100
            ).toFixed(4) + "%"
          );
          offsetsOuter.push(
            (
              -(1 - (el.getBoundingClientRect().top - chatTop) / chatHt) * 50
            ).toFixed(4) + "%"
          );
        });
      }
      console.log(offsetsOuter);

  }

  checkExpanded() {
    this.expanded = document.querySelector('[data-scene="expanded"]')
  }




  initModules(parent = document) {
    Array.from(parent.querySelectorAll("[data-module]")).forEach((el) => {
      const name = el.getAttribute("data-module");
      const Module = require(`./modules/${name}`).default;
      new Module(el);
    });
  }

  findAndReplaceText() {
    replacers.forEach(replacer => {
      findAndReplaceDOMText(document.body, replacer)
    })
  }
}
var app = new App();
$(window).on("authwallCleared", function() {
  app.init();
});