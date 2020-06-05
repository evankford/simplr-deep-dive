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
  Power2,
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
    this.doChat = this.runChat.bind(this);
  }
  setupScenes() {
    this.scenes = document.querySelectorAll('[data-scene]');
    this.chat = document.querySelector('[data-scene="chat"]');
    this.intro = document.querySelector('[data-scene="intro"]');
    this.expanded = document.querySelector('[data-scene="expanded"]');

    new Animator(this.intro);

    this.checkExpanded();
    this.checkChat();
    this.checkIntro();
  }

  checkIntro() {

    if (this.intro) {
      this.introButton = this.intro.querySelector('[data-button-scene]');
      if (this.introButton) {
        this.introButton.addEventListener('click', () => {
          this.intro.setAttribute('data-status', 'post');
          setTimeout(() => {
            this.chat.setAttribute('data-status', 'current');
            setTimeout(() => {
              this.intro.classList.add('hidden')
              this.intro.remove();
              this.doChat();
            }, 500);
          }, 1000);
        })
      }
    } else {

    }
  }

  checkChat() {
    if (this.intro) {
      this.chatButton = this.intro.querySelector('button');
      if (this.chatButton) {
        this.chatButton.addEventListener('click', () => {
          this.chat.setAttribute('data-status', 'post');
          setTimeout(() => {
            this.expanded.setAttribute('data-status', 'current');
            setTimeout(() => {
              this.intro.classList.add('hidden')
              this.intro.remove();
              this.doExpanded();
            }, 500);
          }, 1000);
        })
      }
    } else {

    }
  }

  runExpanded() {

  }

  runChat() {
    let chatTl = new TimelineMax();
    const chatOuter = this.chat.querySelector('.chat-outer');
    const chatInner = chatOuter.querySelector(".chat-inner");
    let chatHt = chatInner.getBoundingClientRect().height;
    let chatTop = chatInner.getBoundingClientRect().top;

    let $chats = $(chatInner).children();
    console.log($chats);

    let offsets = [];
    let delays = []
    let bubbles = []
    let types = []
    let offsetsOuter = [];

    chatTl.to(chatOuter, {y: '-60%'}, 0)
    $chats.each((i, el) => {
      var base = ((1-($(el).offset().top - chatTop) / chatHt + 0.02) * 100).toFixed(4);
      console.log(base)
      var stepName = 'chat' + i;
      var delay = Math.max(0, $(el).attr('data-delay'));

      chatTl.to(
        chatOuter,
        0.5,
        { delay: delay, y: -base / 2 + "%", ease: Power2.easeInOut },
        stepName
      )
      .to(
        chatInner,
        0.5,
        { delay: delay, y: base + "%", ease: Power2.easeInOut },
        stepName
      )
      .add(() => {
        if ($(el).attr('data-bubbles') ==  1) {
            $(el).attr("data-active", "true");
                chatTl.addPause(stepName, ()=> {
                  $(el).attr("data-active", "bubbles");
                  setTimeout(() => {
                    $(el).attr("data-active", "message");
                    chatTl.play();
                  }, 1000);
                });


              } else {
                $(el).attr("data-active", "message");
              }

      }

      )


      })


      console.log(chatTl);




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