import Section from '../components/site-section';
import queryString from 'query-string';
// import {debounce } from 'throttle-debounce'

import ScrollMagic from "scrollmagic";
import {
  TimelineMax,
  TweenMax,
  Power2,
  Power0,
  CSSPlugin,
  Linear,
  gsap
} from "gsap/all";
import { DrawSVGPlugin } from "../components/DrawSVGPlugin";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
 ScrollMagicPluginGsap(ScrollMagic, gsap);
gsap.registerPlugin(DrawSVGPlugin, CSSPlugin);

const plugins = [CSSPlugin, DrawSVGPlugin];



// var activeEvent = new Event('slideActive');
// var inactiveEvent = new Event('slideInactive');

export default class Slider {
  constructor(el) {

    this.el = el;

    this.sections = []
    this.currentIndex = -1;
    this.oldScroll = 0 //for scrolldirection

    // this.scroll = this.handleScroll.bind(this);
    // this.key = this.handleKey.bind(this);
    this.checkActive = this.checkActiveSections.bind(this);
    this.controller =  new ScrollMagic.Controller({});

    this.init()
  }
  init() {
    this.setupSections();

    this.start();
    this.setupListeners();
  }

  setupSections() {
    var sectionList = this.el.querySelectorAll('section[data-title]');
    sectionList.forEach(sectionEl=> {
      var sectionClass= new Section(sectionEl)
      this.sections.push(sectionClass)
    })
    this.max = this.sections.length -1;

    this.setupSectionScrollers();
  }
  setupSectionScrollers() {
    var self = this;
    this.sections.forEach(section=> {
      section.tl = new TimelineMax();
      section.tl.fromTo(section.el , {"--transformer": '-50px'}, {"--transformer": '50px', duration: 1});
      section.pinner = new ScrollMagic.Scene({
        triggerElement: section.el,
        triggerHook: 0,
        duration: "100%"
      })
      .setTween(section.tl)
      .addTo(this.controller)

      var list = section.el.querySelector('.goodbye-list')
      if (list) {
        section.tl.to(list, 3, {y: '-82.5%'}, 0);
        section.pinner.setPin(section.el)
      }


      var timeline = section.el.querySelector("[data-timeline]");
      if (timeline) {
        var addnlTl =  new ScrollMagic.Scene({ triggerElement: section.el,
        triggerHook: 0,
        duration: "100%"
        });
        var timelineBar = timeline.querySelector('[data-timeline-timeline]')
        var timelineTexts = timeline.querySelectorAll('[data-timeline-item]')

        var timelineTl = new TimelineMax();


        timelineTl.from(timelineBar, 1, {scaleX:0, ease: Linear, transformOrigin: 'left'},0)

        var textIndex = 0;
        timelineTexts.forEach(text=> {
          var textPercent = (1 / (timelineTexts.length + 2))*textIndex ;
          textIndex++;
          timelineTl.from(text, 0.2, {autoAlpha: 0, yPercent: 10}, textPercent)
        })

        addnlTl
          .setPin(section.el)
          .setTween(timelineTl)
          .addTo(this.controller);
      }



    })
  }

  startChat(el) {
    var chat = el.querySelector('[data-chat]');
    let chatTL = new TimelineMax();
    let chatOuter = chat.querySelector('.chat-outer');
    if (!chatOuter.classList.contains('loaded')) {

      chatOuter.classList.add('loaded');
      let chatInner = chatOuter.querySelector(".chat-inner");
      let chatHt = chatInner.getBoundingClientRect().height;
      let chatTop = chatInner.getBoundingClientRect().top;
      let chats = chatOuter.querySelectorAll(".chat-bubble");
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


        chatOuter.style.height = chatHt + "px";
        chatOuter.style.transform = "translateY(" + offsetsOuter[1] + ")";
        chatInner.style.transform = "translateY(" + offsets[1] + ")";

        chatTL.to(
          chatInner,
          0.5,
          { ease: Power2.easeInOut, y: "100%" },
          0
        );
        chatTL.to(
          chatInner,
          0.5,
          { ease: Power2.easeInOut, autoAlpha: 1, y: offsets[1] },
          2
        );
        chatTL.to(chatOuter, 0.5, { ease:Power2.easeInOut, y: offsetsOuter[1] }, 0.,6);
        chatTL.to(chatInner, 0.5, { ease:Power2.easeInOut, y: offsets[2] }, 2.8);
        chatTL.to(chatOuter, 0.5, { ease:Power2.easeInOut, y: offsetsOuter[2] }, 2.8);
        chatTL.to(chatInner, 0.5, { ease:Power2.easeInOut, y: offsets[3] }, 4.1);
        chatTL.to(chatOuter, 0.5, { ease:Power2.easeInOut, y: offsetsOuter[3] }, 4.1);
        chatTL.to(chatInner, 0.5, { ease:Power2.easeInOut, y: "0%" }, 6);
        chatTL.to(chatOuter, 0.5, { ease:Power2.easeInOut, y: "0%" }, 6);

        chatTL.play();
    }
  }


  startSingleGraph() {
    var graph = document.querySelector(".single-graph");

     if (graph.classList.contains("loaded")) {
       return false;
     }
     graph.classList.add("loaded");
     graph.classList.remove("hidden");

    var gtl = new TimelineMax({repeat: 0});


      gtl.staggerFrom('.single-box', 0.2,  {scaleY: 0.01, transformOrigin: "bottom" }, 0.1 ,0);
      // gtl.staggerFrom('.graphst1', 0.6, {height: "20px", ease: Power2.easeOut, transformOrigin: "bottom"}, 0.1, 0.56);
      gtl.from('.single-line', 1.9, {drawSVG: 0}, '+=0');
      // gtl.staggerFrom('.graphst0', 0.4, {autoAlpha: 0, ease: Power2.easeInOut}, 0.15, 0);
      gtl.staggerFrom(
        ".single-text",
        0.2,
        { autoAlpha: 0, ease: Power2.easeInOut },
        0.1,
        0
      );
      gtl.staggerFrom('.single-label', 0.2, { autoAlpha: 0, yPercent: '10%', ease: Power2.easeInOut}, 0.05, 0);
      // gtl.staggerFrom('.graph3', 0.2, { autoAlpha: 0, ease: Power2.easeInOut}, 0.05, 1.25);

      gtl.play();

  }



  start() {

    document.body.classList.add('slidesActive')
    var hash = queryString.parse(location.hash);
    var foundIndex = this.sections.findIndex(section=> {return section.id = hash })
    if (foundIndex) {
      this.setInitialSlide(foundIndex)
    } else {
      this.setInitialSlide(0)
    }
  }

  handleMenuClick() {

  }

  setInitialSlide(index = 0) {
    this.currentSection = this.sections[index];
    this.currentIndex = index;
    this.currentSection.isCurrent();
    // this.changeSlide()
  }

  setupListeners() {
    var self = this;
    this.observer = new IntersectionObserver(this.checkActive, { threshold: 0.5 });

    this.sections.forEach(section => {
      this.observer.observe(section.el)
    });

  }

  checkActiveSections(entries) {
    entries.forEach(entry => {
      var index = entry.target.getAttribute('data-index');
      var obj = this.sections[index];
      if (entry.isIntersecting) {
        obj.isCurrent();
        var graph = entry.target.querySelector('.single-graph');
        if (graph) {
          this.startSingleGraph();
        }

        var chat = entry.target.querySelector('[data-chat]');
        if (chat) {
          this.startChat(entry.target);
        }
        var trio = entry.target.querySelector('.graph-trio');
        if (trio) {
          var tl = this.doTrio();
        }


      } else  {
        obj.isOff();
      }
    });
  }

  doTrio() {
    var trio = this.el.querySelector('.graph-trio')

    if (trio.classList.contains('loaded')) {
      return false;
    }
    trio.classList.add('loaded');
    trio.classList.remove('hidden');

    var intro = trio.querySelector('.intro-line');
    var bars = trio.querySelectorAll('.trio-box');
    var trioTl = new TimelineMax({repeat: 0});
    var textboxes = trio.parentNode.querySelectorAll('.text-step')

    var step1 = {
      text: trio.querySelector('[data-textbox="1"]'),
      trend: trio.querySelector('[data-trend="1"]'),
      textBox: trio.parentNode.querySelector('[data-step="1"]')
    }
    var step2 = {
      text: trio.querySelector('[data-textbox="2"]'),
      trend: trio.querySelector('[data-trend="2"]'),
      textBox: trio.parentNode.querySelector('[data-step="2"]')
    }
    var step3 = {
      text: trio.querySelector('[data-textbox="3"]'),
      trend: trio.querySelector('[data-trend="3"]'),
      textBox: trio.parentNode.querySelector('[data-step="3"]')
    }


     textboxes.forEach(textbox => {
       textbox.addEventListener("click", () => {
         var step = textbox.getAttribute("data-step");
         if (step == '3' || step == 3) {
          trioTl.tweenFromTo("step3", "end");
          //  trioTl.play();
         } else {
          //  trioTl.pause();
          trioTl.tweenFromTo("step" + step, "step" + step + "out");

         }
       });
     });

      trioTl
        .from(intro, 0.5, { scaleX: 0, transformOrigin: "center" })
        .staggerFrom(
          bars,
          0.25,
          { scaleY: 0, transformOrigin: "bottom", ease: Power2.easeInOut },
          0.05
        )
        .addPause()
        //Animate bar in
        .to(
          step1.textBox,
          0.5,
          { color: "#1C3773", ease: Power0.easeInOut },
          "step1"
        )
        .from(
          step1.text,
          0.5,
          { autoAlpha: 0, yPercent: 10, ease: Power2.easeInOut },
          "step1"
        )
        .from(step1.trend, 1, { drawSVG: 0, ease: Power0.easeInOut }, "step1")
        .addPause()
        //Animate bar 1 out!
        .to(
          step1.textBox,
          0.25,
          { color: "#999999", ease: Power0.easeInOut, delay: 2.7 },
          "step1out"
        )

        .to(
          step1.text,
          0.25,
          {
            autoAlpha: 0,
            yPercent: 10,
            ease: Power2.easeInOut,
            delay: 2.7
          },
          "step1out"
        )
        .to(
          step1.trend,
          0.4,
          { autoAlpha: 0, ease: Power2.easeInOut, delay: 2.7 },
          "step1out"
        )

        .from(
          step2.text,
          0.5,
          { autoAlpha: 0, yPercent: 10, ease: Power2.easeInOut },
          "step2"
        )
        .from(step2.trend, 1, { drawSVG: 0, ease: Power2.easeInOut }, "step2")
        .to(
          step2.textBox,
          0.5,
          { color: "#1C3773", ease: Power0.easeInOut },
          "step2"
        )
        .addPause()

        //Animate bar 1 out!
        .to(
          step2.textBox,
          0.25,
          { color: "#999999", ease: Power0.easeInOut, delay: 2.7 },
          "step2out"
        )
        .to(
          step2.text,
          0.25,
          {
            autoAlpha: 0,
            yPercent: 10,
            ease: Power2.easeInOut,
            delay: 2.7
          },
          "step2out"
        )
        .to(
          step2.trend,
          0.4,
          { autoAlpha: 0, ease: Power0.easeInOut, delay: 2.7 },
          "step2out"
        )

        //Bar 3 in
        .from(
          step3.text,
          0.5,
          { autoAlpha: 0, yPercent: 10, ease: Power2.easeInOut },
          "step3"
        )
        .from(step3.trend, 1, { drawSVG: 0, ease: Power2.easeInOut }, "step3")
        .to(
          step3.textBox,
          0.5,
          { color: "#1C3773", ease: Power0.easeInOut },
          "step3"
        )
        .addLabel("end")
        .addPause();


      return trioTl;


  }

  // handleSwipe(evt) {
  //   if (evt =='down') {
  //     this.changeSlide('next')
  //   }
  //   if (evt =='up') {
  //     this.changeSlide('prev')
  //   }
  // }

  // changeSlide(newIndex = 0) {
  //   console.log('Changing slide: ' + newIndex);

  //   if (typeof(newIndex) == 'number') {
  //     this.currentSection.ready.end = true;
  //     var cleanedIndex = Math.max(0, Math.min(newIndex, this.sections.length-1));
  //   }
  //   else if (newIndex == 'next') {
  //     if (this.currentIndex == this.max) {
  //       !this.currentSection.ready.end ? this.currentSection.progress :  false;
  //     } else {
  //       var cleanedIndex = this.currentIndex + 1;
  //     }
  //   }
  //   else if (newIndex == 'prev') {
  //     if (this.currentSection.ready.start) {
  //       var cleanedIndex = Math.max(0, this.currentIndex - 1)
  //     }
  //   }
  //   else {
  //     throw new Error("Incorrect slide passed to ChangeSlide. A number, 'next', or 'prev' are accepted")
  //   }

  //   // if (cleanedIndex != this.currentIndex) {
  //     this.sections.forEach(section => {
  //       if (section.index < cleanedIndex) {
  //         section.isBehind()
  //       }
  //       else if (section.index > cleanedIndex) {
  //         section.isAhead()
  //       }
  //     })

  //     //Set current
  //     this.currentIndex = cleanedIndex;
  //     this.currentSection = this.sections[cleanedIndex]
  //     this.currentSection.isCurrent();
  //   // }
  // }

  // handleScroll(evt) {
  //   if (this.checkScrollDirection(evt) == 'down') {
  //     this.changeSlide('next')
  //   } else if(this.checkScrollDirection(evt) == 'up') {
  //     this.changeSlide('prev')
  //   }
  // }

  // handleKey(event) {
  //   if (event.keyCode == 37 || event.keyCode == 38 ) {
  //     this.changeSlide('prev')
  //   } else if (event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40) {
  //     this.changeSlide('next')
  //   }
  // }

  // checkScrollDirection(evt) {
  //   // if (this.currentSection.atBottom)
  //   var currentStatus = this.currentSection.checkScrollStatus();
  //   console.log(currentStatus)
  //   console.log(this.currentIndex)
  //   if (window.scrollY > this.oldScroll || evt.deltaY > 0  ) {
  //     if (currentStatus.bottom) {
  //       return 'down';
  //     }
  //   } else  {
  //     if (currentStatus.top)  {
  //       return 'up';
  //     }
  //   }
  // }
}
