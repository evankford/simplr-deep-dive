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
  TweenMax,
  Power2,
  gsap
} from "gsap/all";
import { DrawSVGPlugin } from "./components/DrawSVGPlugin";
import { MotionPathPlugin } from "./components/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

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
    this.doExpanded = this.runExpanded.bind(this);
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
      this.chatButton = this.chat.querySelector('.button');
      console.log(this.chatButton)
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

  testExpanded() {
    this.chat.setAttribute("data-status", "post");
    this.intro.setAttribute("data-status", "post");
    this.expanded.setAttribute("data-status", "current");
    this.runExpanded();
  }

  runExpanded() {
    new Animator(this.expanded)
    var startAnim = new TimelineMax({onComplete: ()=> {
      $('.blob').show();
      setTimeout(() => {
        TweenMax.staggerTo(
          ".blob",
          2,
          {
            yoyo: true,
            duration: 2,
            repeatDelay: 0.5,
            repeat: 1000,
            motionPath: {
              path: ".whip-path",
              alignOrigin: [0.5, 0.5],
              align: ".whip-path"
            }
          },
          0.45
        );
      }, 200);
    }});

    this.whip = this.expanded.querySelector('[data-whip]')
    this.whip.style.opacity = 0;
    this.whip.classList.remove('hidden');


    startAnim.to(this.whip, 0.1, {opacity: 1}, 0)
    startAnim.from('.whip-path', 3, {drawSVG: 0, ease: Power2.easeInOut}, 0.5)
    startAnim.from('.customer-links', 1, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, 1)
    startAnim.from('.simplr-links', 1, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, 1.6)
    startAnim.from('.specialist-links', 1, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, 2.2)



  }

  runChat() {
    let chatTl = new TimelineMax();
    const chatOuter = this.chat.querySelector('.chat-outer');
    const chatInner = chatOuter.querySelector(".chat-inner");
    let chatHt = chatInner.getBoundingClientRect().height;
    let chatTop = chatInner.getBoundingClientRect().top;

    let $chats = $(chatInner).children();
    this.chat.addEventListener('click', function() {
      console.log("speeding up!")
      chatTl.timeScale(chatTl.timeScale() + 1)
    })
    chatTl.to(chatOuter, {y: '-60%'}, 0)
    $chats.each((i, el) => {
      var base = ((1-($(el).offset().top - chatTop) / chatHt + 0.02) * 100).toFixed(4);
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