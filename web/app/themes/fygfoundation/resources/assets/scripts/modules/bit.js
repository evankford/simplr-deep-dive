/* eslint-disable */
// import Swiper from 'swiper';
var monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var monthsShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
export default  class Bit {
  constructor(el, args) {
    const defaults = {
      appId: '5234ca141a91a3721bdc34b061d329a2',
      artist: 'Keith Urban',
      limit: 8,
      showYear: false,
      dateFormat: 'long numbers',
      filterString: false,
      showLineup: false,
    };

    //Work trhough initial props
    this.el = el;
    this.dataProps = this.getDataProps();
    this.props = Object.assign({}, defaults, this.dataProps, args);

    //Get button
    this.expandButton = this.el.querySelector('[data-expand-bit]');
    this.loaded = this.addLoadedClass.bind(this);
    this.setup();

  }

  setup()  {
    this.initFunc = this.init.bind(this);

    window.addEventListener('load', this.initFunc);
    window.addEventListener('barbaEnter', this.initFunc);
  }

  init() {
     this.shows = [];
     this.getShowData().then((response) => {
       this.shows = response;
       this.renderAllShows();
       window.dispatchEvent(new Event("resize"));
       this.setupExpand();
     });
  }


  getDataProps() {
    let props = {}

    if (this.el.getAttribute('data-limit') != '') {
      props.limit = this.el.getAttribute('data-limit');
    }
    if (this.el.getAttribute('data-artist') != '') {
      props.artist = this.el.getAttribute('data-artist');
    }
    if (this.el.getAttribute('data-number-format') != '') {
      props.dateFormat = this.el.getAttribute('data-number-format');
    }
    if (this.el.getAttribute('data-filter-string') != '') {
      props.filterString = this.el.getAttribute('data-filter-string');
    }
    if (this.el.getAttribute('data-show-lineup') != '') {
      props.showLineup = this.el.getAttribute('data-show-lineup');
    }
    return props;
  }

  async getShowData() {
    let cleanArtist = this.props.artist.replace(' ', '');
    let url =
      'https://rest.bandsintown.com/artists/' +
      cleanArtist +
      '/events?app_id=' +
      this.props.appId;
    try {
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) {
        this.el.querySelector('.error').classList.remove('hidden');
        throw new Error('Failed to load dates. ' + response.message);
      }
      return response.json();
    } catch (error) {
      this.showError();
      console.log(
        'There has been a problem with your fetch operation: ',
        error.message
      );
    }
  }

  showError() {
    this.el.classList.add('error');
    this.el.querySelector('.error').classList.remove('hidden');
  }

  renderDate(show) {
    //Store data
    let showDate = new Date(show.datetime);
    let month = showDate.getMonth();
    let year = '20' + (showDate.getYear() - 100);
    let day = showDate.getDate().toString();

    ///Element
    let dateEl = document.createElement('span');
    dateEl.classList.add('bit-date');
    let string = '<span class="date-inner">';

    //Contitional markup
    switch (this.props.dateFormat) {
      case 'long numbers':
        month = (month + 1).toString();
        if (month.length == 1) {
          string += '0';
        }
        string += month + '.';
        if (day.length == 1) {
          string += '0';
        }
        string += day;
        if (this.props.showYear) {
          string += '.' + year;
        }
        break;
      case 'long words':
        string += monthsLong[month] + ' ' + day;
        if (this.props.showYear) {
          string += ', ' + year;
        }
        break;
      case 'short words':
        string += monthsShort[month] + ' ' + day;
        if (this.props.showYear) {
          string += ', ' + year;
        }
        break;
      default:
        month = (month + 1).toString();
        string += month + '.' + day;
        if (this.showYear) {
          string += '.' + year.substr(2,2);
        }
    }

    //Load markup into element
    dateEl.innerHTML = string + '</span>';
    return dateEl;
  }

  renderInfo(show) {
    //Create elements
    let infoEl = document.createElement('span');
    infoEl.classList.add('bit-info');

    //Get Data
    let region = show.venue.region;
    if (show.venue.country != 'United States') {
      region = show.venue.country;
    }
    let venue = show.venue.name;

    //Conditional formating
    var string = "";


    if (show.venue.city) {
      string += '<h4 class="bit-city">' + show.venue.city;
      if (region) {
        string += ", " + region;
      }
      string += "</h4>";
    }
    if (venue) {
      string += '<h5 class="bit-venue">' + venue + "</h5>";
    }

    if (this.showLineup) {
      string += '<span class="bit-lineup">' + show.lineup + "</span>";
    }
    if (this.showLineup) {
      string += '<span class="bit-lineup">' + show.lineup + '</span>';
    }

    infoEl.innerHTML = string;
    return infoEl;
  }

  renderLinks(show) {
    let linksEl = document.createElement('span');
    linksEl.classList.add('bit-links');

    const offers = show.offers;
    offers.forEach((offer) => {
      let button = document.createElement('a');
      button.setAttribute('href', offer.url);
      button.setAttribute('target', '_blank');
      button.setAttribute('rel', 'nofollow');
      button.classList.add('button');
      button.classList.add('small');
      if (offer.status == 'sold out') {
        button.innerHTML = 'Sold Out';
        button.classList.add('sold-out');
      } else if (offer.status != 'available') {
        button.innerHTML = 'Info';
      } else {
        button.innerHTML = offer.type;
      }

      if (offer.type == 'VIP') {
        button.classList.add('link-vip');
      }

      linksEl.append(button);
    });

    if (offers.length == 0) {
      let infoButton = document.createElement('a');
      infoButton.setAttribute('href', show.url);
      infoButton.innerHTML = 'Info';
      infoButton.classList.add('button');
      infoButton.classList.add('arrow-after');
      infoButton.classList.add('small');
      linksEl.append(infoButton);
    }

    return linksEl;
  }

  renderShow(show) {
    let showEl = document.createElement('div');
    showEl.classList.add('bit-show');
    showEl.setAttribute('data-aos', 'fade-up');
    let date = this.renderDate(show);
    let info = this.renderInfo(show);
    let links = this.renderLinks(show);
    showEl.append(date, info, links);

    return showEl;
  }

  renderAllShows() {
    if (this.isRendered) return true;
    //CreateWrapper
    let wrapper = document.createElement('div');
    let extras = document.createElement('div');
    wrapper.classList.add('bit-wrapper');
    extras.classList.add('bit-wrapper');
    extras.classList.add('bit-extra');

    //Loop through shows
    let counter = 0;
    this.shows.forEach((show) => {
      const showItem = this.renderShow(show);
      //Counter
      counter++;
      if (counter <= this.props.limit) {
        wrapper.append(showItem);
      } else {
        extras.append(showItem);
      }
    });

    if (this.shows.length < this.props.limit) {
      this.showFallback();
    } else {
      this.expandButton.classList.remove('hidden');
    }

    this.loaded();
    this.el.prepend(wrapper, extras);
    this.el.querySelector('.loader').classList.add('hidden');
  }



  addLoadedClass() {
    this.rendered = true;
    this.el.classList.add('shows-loaded');
  }

  setupExpand() {
    this.extraWrapper = this.el.querySelector('.bit-extra');
    this.extraShows = this.extraWrapper.querySelectorAll('.bit-show');

    if (this.extraShows && this.extraShows.length > 0) {
        this.el.addEventListener('click', (evt) => this.clickListener(evt));
    } else {
      this.expandButton.classList.add('hidden');
      this.el.classList.add('no-extras');
    }
  }

  toggleExpand() {
    if (this.expandButton.getAttribute('data-expand-bit') == 'expanded') {
      //collapse
      this.expandButton.innerHTML = this.expandButton.getAttribute(
        'data-more-text'
      );
      this.expandButton.setAttribute('data-expand-bit', '');
      this.extraWrapper.style.maxHeight = 0 + 'px';
    } else {
      this.expandButton.setAttribute('data-expand-bit', 'expanded');

      let heightTarget =
        this.extraShows[0].getBoundingClientRect().height *
        (this.extraShows.length * 1.75);
      this.extraWrapper.style.maxHeight = heightTarget + 50 + 'px';
      this.expandButton.innerHTML = this.expandButton.getAttribute(
        'data-less-text'
      );
    }
    window.dispatchEvent(new Event('resize'));
  }

  clickListener(event) {
    if (event.target == this.expandButton) {
      event.preventDefault();
      this.toggleExpand();
    }
  }

  showFallback() {
    this.el.classList.add('fallback-active');
    this.el.querySelector('.fallback').classList.remove('hidden');
  }
}

