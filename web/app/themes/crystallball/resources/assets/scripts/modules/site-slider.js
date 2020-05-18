import Section from '../components/site-section';
import queryString from 'query-string';

// var activeEvent = new Event('slideActive');
// var inactiveEvent = new Event('slideInactive');

export default class Slider {
  constructor(el) {
    this.el = el;

    this.sections = []
    this.currentIndex = -1;
    this.currnentSection = false;

    this.oldScroll = 0 //for scrolldirection
    this.init()
  }
  init() {
    var sectionList = this.el.querySelectorAll('section[data-title]');
    sectionList.forEach(sectionEl=> {
      var sectionClass= new Section(sectionEl)
      this.sections.push(sectionClass)
    })
    console.log(this.sections);

    this.setupListeners();
    this.start();

  }

  start() {
    var hash = queryString.parse(location.hash);
    var foundIndex = this.sections.findIndex(section=> {return section.id = hash })
    if (foundIndex) {
      this.changeSlide(foundIndex)
    } else {
      this.changeSlide(0)
    }
  }

  handleMenuClick() {

  }

  setupListeners() {
    var self = this;
    window.addEventListener('scroll', self.handleScroll)
    window.addEventListener('keydown', self.handleKey)
    window.addEventListener('changeSlide', self.changeSlide)
  }

  changeSlide(index) {

  }

handleScroll() {
    if (this.checkScrollDirection() == 'down') {

      if (this.currnentSection.ready) {
        changeSlide(this.currentIndex + 1)
      } else (this.currnentSection )
    }
  }

  checkScrollDirection() {
    if (window.scrollY > this.oldScroll) {
      return 'down';
    } else  {
      return 'up';
    }
  }


}
