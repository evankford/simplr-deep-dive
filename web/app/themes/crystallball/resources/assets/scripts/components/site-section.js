import Animator from './gsapUtilities'

export default class Section {
constructor(el) {
  this.el = el;
  this.id = this.el.id;
  this.index = this.el.getAttribute('data-index');
  this.ready = {
    start: true,
    end:true
  };
  this.active = false;

  this.animator = new Animator(el);
  this.isAhead = this.setAhead.bind(this);
  this.isBehind = this.setBehind.bind(this);
  this.isOff = this.setOff.bind(this);
  this.isCurrent = this.setCurrent.bind(this);
  // this.isNext = this.setNext.bind(this);
  // this.isPrev = this.setPrev.bind(this);

  this.progress = this.progressStep.bind(this)
  this.regress = this.regressStep.bind(this)
}
runScene(observed) {

}

checkScrollStatus() {
  console.log(this.el.scrollHeight)
  console.log(this.el.offsetHeight)
  console.log(this.el.scrollTop)
  var rect = this.el.getBoundingClientRect()
  var status = {
    top: false,
    bottom: false
  }
  if (this.el.scrollTop <= 250) {
    status.top= true
  }
  if (Math.abs((this.el.scrollHeight - this.el.scrollTop) -this.el.offsetHeight) <= 250) {
    status.bottom = true
  }
  return status;
}
  init() {
    this.addEventListener("slideActive", this.animator.on);
    this.addEventListener("inactive", this.animator.off);
  }
  setAhead() {
    if (this.el.getAttribute('data-position') == 'current') {
      this.el.classList.add('outgoing')
      setTimeout(() => {
        this.el.classList.remove('outgoing');
        this.animator.stop();
      }, 1000)
    }
    this.el.setAttribute("data-position", "ahead");
  }
  // setNext() {
  //   this.el.setAttribute('data-position', 'next')
  //   this.animator.stop();
  // }
  // setPrev() {
  //   this.el.setAttribute('data-position', 'prev')
  //   this.animator.stop();
  // }
  setCurrent() {
    this.el.classList.add('section-open')
    if (!this.el.classList.contains('section-active')) {
      this.el.classList.add('section-active')
      // setTimeout(()=>{
      //   this.el.classList.remove('incoming')}, 1000)
      // this.el.setAttribute('data-position', 'current')
      // this.animator.start();

      // window.location.hash = this.el.id;
    }
  }
  setOff() {
    this.el.classList.remove('section-active')
    // setTimeout(()=>{
    //   this.el.classList.remove('incoming')}, 1000)
    // this.el.setAttribute('data-position', 'current')
    // this.animator.stop();
  }
  setBehind() {
    this.el.setAttribute('data-position', 'behind')
    this.animator.stop();
  }

  resetSteps() {
    this.animator.reset();
  }

  progressStep() {

  }
  regressStep() {

  }
}