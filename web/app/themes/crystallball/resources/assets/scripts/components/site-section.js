import Animator from './gsapUtilities'

export default class Section {
constructor(el) {
  this.el = el;
  this.id = this.el.id;
  this.ready = true;
  this.active = false;

  this.animator = new Animator(el);
  this.ahead = this.setAhead.bind(this);
  this.behind = this.setBehind.bind(this);
  this.current = this.setCurrent.bind(this);
  this.next = this.setNext.bind(this);
  this.prev = this.setPrev.bind(this);
}

  init() {
    this.addEventListener("slideActive", this.animator.on);
    this.addEventListener("inactive", this.animator.off);
  }
  setAhead() {
    this.el.setAttribute("data-position", "ahead");
    this.animator.stop();
  }
  setNext() {
    this.el.setAttribute('data-position', 'next')
    this.animator.stop();
  }
  setPrev() {
    this.el.setAttribute('data-position', 'prev')
    this.animator.stop();
  }
  setCurrent() {
    this.el.setAttribute('data-position', 'current')
    this.animator.start();
  }
  setBehind() {
    this.el.setAttribute('data-position', 'behind')
    this.animator.stop();
  }
}