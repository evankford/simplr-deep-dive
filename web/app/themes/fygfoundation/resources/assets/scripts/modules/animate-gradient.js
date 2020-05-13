import  gsap, { TweenMax, CSSPlugin } from "gsap";

gsap.registerPlugin(CSSPlugin)

export default class AnimateGradient {
  constructor(el) {
    this.el = el
    this.colors = {
      black: "#050505",
      yellow: "#D88F3A",
      aqua: "#A0E2C3",
      red: "#D84F42",
      green: "#406973",
      pink: "#C47CD4",
      salmon: "#DD7D7C",
      blue: "#3F69EA",
      orange: "#D88F3A"
    };
    this.colorKeys = Object.keys(this.colors);
    this.initiated = false
    this.init();
  }


  init() {
    this.gradient = this.gradientAnim.bind(this);
    this.getColors = this.getRandomPairing.bind(this);

    this.gradient();
  }

  gradientAnim() {
    var colorPair = this.getColors();
    TweenMax.to(this.el, 10, {backgroundImage: 'linear-gradient(to bottom, ' + colorPair.top + ', ' + colorPair.bottom + ')', onComplete: this.gradient});
  }

  getRandomPairing() {
    return {
      top: this.colors[
        this.colorKeys[Math.round(Math.random() * this.colorKeys.length)]
      ],
      bottom: this.colors[
        this.colorKeys[Math.round(Math.random() * this.colorKeys.length)]
      ]
    };
  }
}