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

import queryString from 'query-string'

import {
  TimelineMax,
  TweenMax,
  Power2,
  Elastic,
  gsap,
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
          this.intro.setAttribute('data-status', 'hiding');
          setTimeout(() => {
            this.chat.setAttribute('data-status', 'current');
            setTimeout(() => {
              this.intro.classList.add('hidden')
              this.intro.setAttribute('data-status', 'post');
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
      if (this.chatButton) {
        this.chatButton.addEventListener('click', () => {
          this.chat.setAttribute('data-status', 'post');
          setTimeout(() => {
            this.expanded.setAttribute('data-status', 'current');
            setTimeout(() => {
              this.intro.classList.add('hidden')
              this.intro.remove();
              this.runTimeline();
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
    this.runTimeline();
  }

  runExpanded() {

     if (this.expandedStatus == true) return false;

     this.expandedStatus = true;

    new Animator(this.expanded)

    var simplrWrap = this.expanded.querySelector(".simplr-links");
    var simplrButtons = simplrWrap.querySelectorAll(".sample-button");
    var customerWrap = this.expanded.querySelector(".customer-links");
    var customerButtons = customerWrap.querySelectorAll(".sample-button");
    var specialistWrap = this.expanded.querySelector(".specialist-links");
    var specialistButtons = specialistWrap.querySelectorAll(".sample-button");
    var specialistIcons = specialistWrap.querySelectorAll(".person-icon");
    var customerIcons = customerWrap.querySelectorAll(".person-icon");

    var startAnim = new TimelineMax({id: 'expanded', onComplete: ()=> {
      setTimeout(() => {
        TweenMax.staggerTo(
          ".blob",
          0.4,
          {
           autoAlpha:1
          },
          0.45
        );
        TweenMax.staggerTo(
          ".blob",
          2,
          {
            yoyo: true,
            duration: 2,
            repeatDelay: -0.5,
            repeat: 1000,
            motionPath: {
              path: ".whip-path",
              align: ".whip-path",
              alignOrigin: [0.5, 0.5]
            }
          },
          0.45
        );




        specialistButtons.forEach(button => {
          button.removeAttribute('style');
        });
        specialistIcons.forEach(button => {
          button.removeAttribute('style');
        });
        customerButtons.forEach(button => {
          button.removeAttribute('style');
        });
        simplrButtons.forEach(button => {
          button.removeAttribute('style');
        });
        customerIcons.forEach(button => {
          button.removeAttribute('style');
        });

        // this.runTimeline();
      }, 200);
    }});

    this.whip = this.expanded.querySelector('[data-whip]')
    this.whip.style.opacity = 0;
    this.whip.classList.remove('hidden');


    startAnim.to(this.whip, 0.1, {opacity: 1}, 0)
    startAnim.from('.whip-path', 3.5, {drawSVG: 0, ease: Power2.easeInOut}, 0)

    startAnim.from(customerWrap, 0.8, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, 1)
    startAnim.staggerFrom(customerButtons, 0.4, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, 0.2, 0.5)
    startAnim.staggerFrom(customerIcons, 0.4, {autoAlpha: 0, x: '125%', ease: Power2.easeInOut}, 0.12, 0.7)
    startAnim.from(simplrWrap, 0.8, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, 1.2)
    startAnim.staggerFrom(simplrButtons, 0.4, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, -0.2, 1.2)
    startAnim.from(specialistWrap, 0.8, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, 2)
    startAnim.staggerFrom(specialistButtons, 0.4, {autoAlpha: 0, y: '25%', ease: Power2.easeInOut}, 0.2, 2)
    startAnim.staggerFrom(specialistIcons, 0.4, {autoAlpha: 0, x: '-125%', ease: Power2.easeInOut}, 0.12, 2.3)



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
      if (i == 0) {
        chatTl
          .to(
            chatOuter,
            0.5,
            { delay: delay, y: -(base*1.15) / 2 + "%", ease: Power2.easeInOut },
            "start"
          )
          .to(
            chatInner,
            0.5,
            { delay: delay, y: (base*1.15) + "%", ease: Power2.easeInOut },
            "start"
          );
      }
      console.log(base);
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

    console.log(chatTl)
  }

  checkExpanded() {
    this.expanded = document.querySelector('[data-scene="expanded"]')
  }

  startButtons() {
    this.expandedBG = document.querySelector('.expanded-bg');


    var self = this;
    $('.sample-button').click((evt)=>{

        if ($(evt.target).hasClass("sample-button")) {
          var $targ = $(evt.target);
          var targ = evt.target;
        } else {
          var $targ = $(evt.target).parents(".sample-button");
          var targ = $(targ)[0];
        }

      var bgColor = $targ.data('color')
      $(".expanded-bg")
        .css({
          left: $targ.offset().left + 0.5 * $targ.width(),
          top: $targ.offset().top - 0.5 * $targ.height()
        })
        .removeClass("hidden");

      var scaleMod = Math.min(window.innerWidth, window.innerHeight/ 30)

      var id = $targ.data('id')
      $("[data-page=" + id + "]").removeClass('hidden')
        setTimeout(() => {
          $("[data-page=" + id + "]")
            .addClass("current-page")
            .parents('.expanded-pages')
            .removeClass("hidden pointer-events-none");
            new Animator($("[data-page=" + id + "]")[0]);
        }, 500);
      gsap.to(this.expandedBG, {scale: scaleMod, backgroundColor: bgColor, ease: Power2.easeInOut, duration: 1});
        gsap.to("[data-close-popup]", {
          autoAlpha: 0,
          scale: 0,
          delay: 0.5,
          duration: 0.5,
          ease: Power2.easeInOut,
          onComplete: () => {
             $('[data-close-popup]').removeAttr('style');
          }
      })
    })

    $('[data-close-popup]').click(()=> {
      var $current = $('.current-page')
      $current.removeClass("current-page");
      gsap.to(this.expandedBG, {scale: 0, duration: 0.7})
      setTimeout(() => {
        $('.expanded-pages').addClass('hidden pointer-events-none')
        $current.addClass('hidden')
      }, 760);
       gsap.to("[data-close-popup]", {autoAlpha: 0, scale: 0, delay: 0.5, duration: 0.5, ease: Power2.easeInOut})
    })
  }

  runTimeline() {
    this.startButtons();
    this.timeline = new TimelineMax({id: 'timeline'})
    this.timeline.pause();
    this.timelineWrap = document.querySelector('.chat-timeline')



    this.timelineWrap.classList.remove('invisible');
    var $timelineItems = $(this.timelineWrap).children();







    $timelineItems.each((i, el) => {
      //CreateTimeline
      var stepName = 'step' + i;

      //Animate main message
      this.timeline.to(
        "[data-status=active]",
        1.2,
        { autoAlpha: 0, y: "20%", ease: Power2.easeInOut },
        stepName
      );
      this.timeline.fromTo(
        el,
        0.8,
        { autoAlpha: 0, y: "20%" },
        { delay: 0, y: "0%", autoAlpha: 1, ease: Power2.easeInOut },
        stepName
      );

      //Do ticket things



      //HANDLE LINKS
      var linksArray = $(el).attr('data-links').split(',')
      if (linksArray.length == 1 && linksArray[0] == '') {
        linksArray = false;
      }
      if (linksArray.length > 0) {
        this.timeline.add(() => {
          $(".all-links").addClass("links-active");
        }, stepName + "+=0.25");
      }

      this.timeline.add(() => {
         $(this.timelineWrap)
          .find('[data-status="active"]')
          .attr("data-status", "inactive");
      }, stepName +'+=0.1');


      this.timeline.add(() => {
        $(el).attr("data-status", "active")
        if ($(el).children('.speech-bubble').length) {
           $('.pulse').removeClass('pulse');
          $(el).children('.speech-bubble').addClass('pulse')
        } else {

        }
      }, stepName+ '+=.24');




      this.timeline.add(() => {
        $(".sample-button.active").removeClass("active");

        if (linksArray) {
          linksArray.forEach(link => {
            var searcher = ".sample-button[data-id=" + link + "]";
            $(searcher).addClass("active");
            $(searcher)
              .parents(".links-wrap")
              .addClass("has-links");
          });
        } else {
             $(".all-links").removeClass("links-active");
        }

        if (i == 0) {
          this.watchTimelineButtons();
          this.runExpanded();
        } else {
          this.moveTicket(el)
        }

      }, stepName+'+=0.5');

      this.timeline.addPause(stepName + "+=2");

    })
    //Anim in buttons at the beginning

    this.timeline.addLabel('end');

    this.timeline.play();


  }

  startTicket() {
    this.ticket = document.getElementById('ticket') ;

    this.ticketTl = new TimelineMax()
     this.ticketTl
       .to(this.ticket, {
         duration: 0.5,
         motionPath: {
           autoRotate: true,
           path: ".whip-path",
           align: ".whip-path",
           alignOrigin: [0.5, 0.5],
           start: 0,
           end: 0.005
         }
       }, 'customer')
       .addPause("customerPause");
      this.ticketTl = new TimelineMax()
      this.ticketTl
       .to(this.ticket, {
         duration: 1,
         motionPath: {
           autoRotate: true,
           path: ".whip-path",
           align: ".whip-path",
           alignOrigin: [0.5, 0.5],
           start: 0.006,
           end: 0.047
         }
       })
       .addPause("customerTween");
     this.ticketTl
       .to(this.ticket, {
         duration: 2.5,
         motionPath: {
           autoRotate: true,
           path: ".whip-path",
           align: ".whip-path",
           alignOrigin: [0.5, 0.5],
           start: 0.048,
           end: 0.48
         }
       })
       .addPause("simplr");
     this.ticketTl
       .to(this.ticket, {
         duration: 1,
         motionPath: {
           autoRotate: true,
           path: ".whip-path",
           align: ".whip-path",
           alignOrigin: [0.5, 0.5],
           start: 0.481,
           end: 0.95
         }
       })
       .addPause("specialistTween");
     this.ticketTl
       .to(this.ticket, {
         duration: 0.5,
         motionPath: {
           autoRotate: true,
           path: ".whip-path",
           align: ".whip-path",
           alignOrigin: [0.5, 0.5],
           start: 0.951,
           end: 0.99
         }
       })
       .addPause("specialist");
    gsap.fromTo(this.ticket, {autoAlpha: 0, scale: 0}, {autoAlpha:1, scale: 1, ease: Power2.easeInOut})
  }
  moveTicket(el) {
    var currentLayout = $(el).attr('data-layout');
    var currentAuthor = $(el).attr('data-author');
    var label = '';

    if (currentLayout == 'Tween') {
      if (currentAuthor == 'Specialist') {
        label = 'specialistTween'
      }
      else if (currentAuthor == 'Customer') {
        label = 'customerTween'
      }
    } else {
      label = currentAuthor.toLowerCase();
    }

    if (!this.ticketTl) {
      this.startTicket();
    }

    if (label) {
      this.ticketTl
        .tweenTo(label, { duration: 1.8, ease: Power2.easeInOut })
    }
  }

  togglePlayButton()  {
    if (this.playButton) {
      var icon = this.playButton.getElementsByTagName('i');
      var text = this.playButton.getElementsByTagName('span');
    }
  }

  watchTimelineButtons() {


     if (this.timelineButtonStatus == true) return false;

     this.timelineButtonStatus = true;

    var self = this;
  this.playButton = document.querySelector("[data-timeline-button='play']");
  this.prevButton = document.querySelector("[data-timeline-button='prev']");
  this.nextButton = document.querySelector("[data-timeline-button='next']");

  this.playButton.addEventListener('click', () => {
    var rem = self.timeline.duration() * (1 - self.timeline.progress()) * 2;
    self.timeline.tweenTo('end', {duration: rem})

    this.togglePlayButton();
  })
  this.nextButton.addEventListener('click', () => {
    self.timeline.reversed(false).play();
  })
  this.prevButton.addEventListener('click', () => {
    self.timeline.seek(Math.max(0, self.timeline.time() - 4)).play();
  })

  var buttonTL = new TimelineMax();
   buttonTL.staggerFromTo(
     "[data-timeline-button]",
     0.5,
     { autoAlpha: 0, y: 20, ease: Power2.easeInOut },
     { autoAlpha: 0.45, y: 0, ease: Power2.easeInOut, delay: 3.5 },
     0.2,
     () => {
       $("[data-timeline-button]")
         .removeClass("invisible")
         .removeAttr("style");
     }
   );
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

  if (queryString.parse(window.location.search).skipIntro == 'true') {
    app.testExpanded();
  }

});
