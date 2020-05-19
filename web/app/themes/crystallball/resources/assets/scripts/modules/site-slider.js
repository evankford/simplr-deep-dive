import Section from '../components/site-section';
import queryString from 'query-string';
// import {debounce } from 'throttle-debounce'

import * as ScrollMagic from "scrollmagic";
import  { TimelineMax , TweenMax , Power2, CSSPlugin, gsap} from 'gsap';
import { DrawSVGPlugin } from "../components/DrawSVGPlugin";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

gsap.registerPlugin(DrawSVGPlugin);



// var activeEvent = new Event('slideActive');
// var inactiveEvent = new Event('slideInactive');

export default class Slider {
  constructor(el) {
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
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
      var transformerTL = new TimelineMax();
      transformerTL.fromTo(section.el , {"--transformer": '-50px'}, {"--transformer": '50px', duration: 1});
      var pinner = new ScrollMagic.Scene({
        triggerElement: section.el,
        triggerHook: 0,
        duration: "100%"
      })
      .setTween(transformerTL)
      .addTo(this.controller)

      var list = section.el.querySelector('.goodbye-list')
      if (list) {
        transformerTL.to(list, 3, {y: '-78.5%'});
        pinner.setPin(section.el)
      }




    })
  }

  startSingleGraph() {
    var graph = this.el.querySelector('.single-graph')
    var gtl = new TimelineMax({repeat: 0});
      let bars = graph.querySelectorAll('.gst1');
      // gtl.from('.graph-graph', 0.5, {opacity: 0}, 0)
      let barTime = 0.5;
      bars.forEach(el => {
        barTime += 0.07
        let rect= el.getBoundingClientRect();
        let ht = rect.bottom - rect.top;

        let getToSmall =  (0.2/(Math.sqrt(ht)))*0.5 + '%';

        gtl.fromTo(el, 0.6, {scaleY: 0},  { scaleY: getToSmall, ease: Power2.easeOut, transformOrigin: "bottom", duration: 2}, barTime );
      })
      // gtl.staggerFrom('.gst1', 0.6, {height: "20px", ease: Power2.easeOut, transformOrigin: "bottom"}, 0.1, 0.56);
      gtl.from('.gst6', 1.9, {drawSVG: 0}, 1.2);
      gtl.staggerFrom('.gst0', 0.4, {autoAlpha: 0, ease: Power2.easeInOut}, 0.15, 0);
      gtl.staggerFrom('.gst4', 0.4, {autoAlpha: 0, ease: Power2.easeInOut}, 0.15, 0.65);
      gtl.staggerFrom('.gst5', 0.2, { opacity: 0, ease: Power2.easeInOut}, 0.05, 1.25);
      // gtl.staggerFrom('.gst3', 0.2, { autoAlpha: 0, ease: Power2.easeInOut}, 0.05, 1.25);

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

  checkActiveSections(entries, observer) {
    entries.forEach(entry => {
      var index = entry.target.getAttribute('data-index');
      var obj = this.sections[index];
      if (entry.isIntersecting) {
        obj.isCurrent();


        var graph = entry.target.querySelector('.single-graph');
        if (graph) {
          this.startSingleGraph();
        }

        var trio = entry.target.querySelector('.graph-trio');
        if (graph) {
          this.doTrio();
        }


      } else  {
        obj.isOff();
      }
    });
  }

  doTrio() {
    var trio = this.el.querySelector('.single-graph')
    var gtl = new TimelineMax({repeat: 0});
      let bars = trio.querySelectorAll('.gst1');
      gtl.from('.graph-graph', 0.5, {opacity: 0}, 0)
      let barTime = 0.5;
      bars.forEach(el => {
        barTime += 0.07;
        let rect= el.getBoundingClientRect();
        let ht = rect.bottom - rect.top;

        let getToSmall =  (0.2/(Math.sqrt(ht)))*0.5 + '%';

        gtl.from(el, 0.6, { scaleY: getToSmall, ease: Power2.easeOut, transformOrigin: "bottom"}, barTime );
      })
      // gtl.staggerFrom('.gst1', 0.6, {height: "20px", ease: Power2.easeOut, transformOrigin: "bottom"}, 0.1, 0.56);
      gtl.from('.gst7', 1.9, {drawSVG: 0}, 1.2);
      // gtl.staggerFrom('.gst4', 0.4, {opacity: 0, ease: Power0.easeInOut}, 0.15, 0.65);
      gtl.staggerFrom('.gst5', 0.2, { opacity: 0, ease: Power0.easeInOut}, 0.05, 1.25);

      gtl.play();
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
