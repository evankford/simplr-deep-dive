
import  {  TimelineMax, TweenMax, Power1} from 'gsap';
// import { DrawSVGPlugin } from "./DrawSVGPlugin";

var graph = document.querySelector('.graph-section');
  if (graph) {


    ///list

    var graphList = graph.querySelector('.graph-list');


    var graphScene = new ScrollMagic.Scene({
      offset: -400,
      duration: "200%",
      triggerElement: graph,
      triggerHook: "onLeave"
    });


    graphScene.addTo(scrollController);


    var gtl = new TimelineMax({repeat: 0});
    let bars = graph.querySelectorAll('.gst1');
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

    gtl.pause();
    graphScene.setClassToggle(graph, 'section-active');
    graphScene.on("enter", function () {
      graph.classList.add('section-loaded');
      gtl.play();
    })
  }
export default class Trio {
  constructor(el) {
    this.el = el;
    this.timeline = new TimelineMax();

    this.init();
  }

  init() {

  }
}