import Section from './site-section'''

export default class Slider {
  constructor() {

    this.ahead = this.setAhead.bind(this);
    this.behind = this.setBehind.bind(this);
    this.current = this.setCurrent.bind(this);

    this.init()
  }
  init()
}
