import countdown from 'countdown';
const replacer = {
  and: '',
  ',': '',
  ' hours': '<span> hours</span>',
  ' hour': '<span> hour</span>',
  ' days': '<span> days</span>',
  ' day': '<span> day</span>',
  ' minutes': '<span> minutes</span>',
  ' minute': '<span> minute</span>',
  ' seconds': '<span> seconds</span>',
  ' second': '<span> second</span>',
  ' months': '<span> months</span>',
  ' month': '<span> month</span>',
};
const minimal = {
  and: '',
  ',': '',
  ' hours': '<span>:</span>',
  ' hour': '<span>:</span>',
  ' days': '<span>:</span>',
  ' day': '<span>:</span>',
  ' minutes': '<span>:</span>',
  ' minute': '<span>:</span>',
  ' seconds': '',
  ' second': '',
  ' months': '<span>:</span>',
  ' month': '<span>:</span>',
};

const nums = {
  '>0 ' : '>00 ',
  '>1 ' : '>01 ',
  '>2 ' : '>02 ',
  '>3 ' : '>03 ',
  '>4 ' : '>04 ',
  '>5 ' : '>05 ',
  '>6 ' : '>06 ',
  '>7 ' : '>07 ',
  '>8 ' : '>08 ',
  '>9 ' : '>09 ',
  '>0<' : '>00<',
  '>1<' : '>01<',
  '>2<' : '>02<',
  '>3<' : '>03<',
  '>4<' : '>04<',
  '>5<' : '>05<',
  '>6<' : '>06<',
  '>7<' : '>07<',
  '>8<' : '>08<',
  '>9<' : '>09<',
}

function replaceAll(str, mapObj) {
  var re = new RegExp(Object.keys(mapObj).join('|'), 'gi');

  return str.replace(re, function (matched) {
    return mapObj[matched.toLowerCase()];
  });
}

export default class Countdown {
  constructor(el) {
    this.interval;
    this.el = el;
    this.expire = this.el.getAttribute('data-datetime');
    this.target = this.el.querySelector('[data-countdown-target]');
    this.step = this.countdownStep.bind(this);

    this.init();
    this.style = this.el.getAttribute('data-style');
  }

  init() {
    this.loaded();
    this.step();

    this.interval = setInterval(() => {
      this.step();
    }, 1000);
  }

  countdownStep() {
    this.countdown = countdown(new Date(), new Date(this.expire), null, 4);
    if (this.countdown.value < 0) {
      this.expired();
      return true;
    } else {
      let countdownText = this.countdown.toHTML('div').toString();
      var finalCountdown = replaceAll(countdownText, minimal);
      if (this.style == 'major') {
        finalCountdown = replaceAll(countdownText, replacer);
      }
      this.target.innerHTML = replaceAll(finalCountdown, nums);
    }
  }

  expired() {
    this.el.classList.remove('counting');
    this.el.classList.add('finished');

    this.el.querySelector('[data-finished-content]').classList.remove('hidden');
    this.el.querySelector('[data-counting-content]').classList.add('hidden');
  }

  loaded() {
    this.el.classList.add('loaded');
    this.el.classList.add('counting');

    this.el.querySelector('[data-finished-content]').classList.add('hidden');
    this.el.querySelector('[data-counting-content]').classList.remove('hidden');
  }
}
