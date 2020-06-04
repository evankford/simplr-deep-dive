import * as basicLightbox from 'basiclightbox';

function YouTubeGetID(url) {
  var ID = '';
  url = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }

  return ID;
}
function vimeoGetID() {}

export default class VidBox {
  constructor(el) {
    console.log("Creating a vidbox")
    this.el = el;
    this.target = this.el.querySelector('[data-vidbox-video]');
    this.type = this.checkForType();
    this.play = this.el.getAttribute('data-play');
    this.player = {};
    this.persist = 0;
    this.checkTimer = 0;
    //Check if lightbox is appropriate here

    this.playMyVideo = this.startVideo.bind(this);
    this.pauseMyVideo = this.stopVidbox.bind(this);

    this.initLightbox();

    this.createVideo();

    this.addStartListener();
    this.addDestroyListener();
    if (this.play > 0) {
      this.playMyVideo();
    }
  }

  addStartListener() {
    var self = this;
    this.el.addEventListener('onscreen', self.playMyVideo);
  }

  addDestroyListener() {
    var self = this;
    this.el.addEventListener('offscreen', self.pauseMyVideo);
  }

  initFunction() {
    this.startVideo();

  }

  destroyFunction() {
    this.destroyVideo();
  }

  createVideo() {
    if (this.type == 'youtube') {
    this.createYoutube();
    } else if (this.type == 'vimeo') {
      this.createVimeo();
    }
  }

  startVideo() {
    if (this.player && typeof(this.player.playVideo) == 'function') {
      clearTimeout(this.persist);
      this.play = true;
      this.YTReady();
    } else {
      this.persist = setTimeout(() => {
        this.playMyVideo()
      }, 200);
    }
  }

  stopVidbox() {
    clearTimeout(this.persist);
    if (this.player && typeof(this.player.stopVideo) == 'function') {
      if (this.player.getPlayerState == 1) {
        this.player.stopVideo();
      }
      // this.player.destroy();
      clearInterval(this.checkTimer);
      clearInterval(this.persist);
    }
  }

  createVimeo() {
    //Anything
  }

  checkForType() {
    var rawType = this.el.getAttribute('data-vidbox-type');
    console.log(rawType);
    if (rawType == 'URL') {
      var vidId = this.target.getAttribute('data-vidbox-video');
      var realId = '';
      if (vidId.indexOf('//yout') > 0 || vidId.indexOf('.yout') > 0) {
        realId = YouTubeGetID(vidId);
        rawType = 'youtube';
      } else if (vidId.indexOf('//vim') > 0 || vidId.indexOf('.vim') > 0) {
        realId = vimeoGetID(vidId);
        rawType = 'vimeo';
      }
    }

    if (realId) {
      this.vidId = realId;
      return rawType;
    } else {
      return false;
    }
  }

  initLightbox() {
    if (!this.lightbox) {
      if (this.type == 'youtube') {
        this.lightbox = basicLightbox.create(
          '<div class="iframe-wrap"><iframe src="https://www.youtube.com/embed/' +
            this.vidId +
            '?autoplay=1&rel=0" allowfullscreen  playsinline muted frameborder="0" frameborder="0" ></iframe></div>'
        );
        this.lightboxWatchers();
      } else if (this.type == 'vimeo') {
        this.lightbox = basicLightbox.create(
          '<div class="iframe-wrap"><iframe src="https://www.youtube.com/embed/' +
            this.vidId +
            '?autoplay=1&rel=0" allowfullscreen playsinline muted  frameborder="0" frameborder="0" ></iframe></div>'
        );
        this.lightboxWatchers();
      } else {
        this.lightbox = false;
      }
    }
  }

  lightboxWatchers() {
    var self = this;
    var buttons = self.el.parentNode.parentNode.querySelectorAll(
      '[data-lightbox-button]'
    );
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        self.lightbox.show();
      });
    });
  }

  createYoutubePlayer() {
    this.player = new window.YT.Player(this.target, {
      height: '600',
      width: '1200',
      videoId: this.vidId,
      playerVars: {
        rel: 0,
        showinfo: 0,
        modestBranding: 1,
        loop: 1,
        playsinline: 1,
        enablejsapi: 1,
        muted: 1,
        // disablekb: 1,
        controls: 0,
      },
      events: {
        onReady: this.YTReady,
        onStateChange: this.YTChange,
      },
    });
  }

  createYoutube() {

    this.YTCreate = this.createYoutubePlayer.bind(this);
    this.YTReady = this.onPlayerReady.bind(this)
    this.YTChange = this.onPlayerStateChange.bind(this)
    this.player = false;
    var self = this;

    if (!document.getElementById('youtubeIframeApi')) {
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.id = 'youtubeIframeApi';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYoutubeIframeAPIReady = {};
    }
    self.playerWrap = this.el;
    self.start = 0;
    if (self.el.getAttribute('data-start-time') > 0) {
      self.start = Math.max(0, self.el.getAttribute('data-start-time'));
    }
    this.youtubeLoop(this.YTCreate);
  }

  youtubeLoop(func) {
    if (window.YT && window.YT.loaded == 1) {
        return func();
    } else {
      setTimeout(() => {
        this.youtubeLoop(func);
      }, 200);
    }
  }
  playCheck() {
    if (!this.player) return false;
    this.state = this.player.getPlayerState();
    if (this.checkCount > 100 && this.state != 1) {
      this.playerWrap.classList.add('use-gif');
      if (window.innerWidth <= 800) {
        this.playerWrap.classList.add('use-gif');
        this.playerWrap.classList.add('small');
      }
      clearInterval(this.checkTimer);
      this.checkTimer = 0;
      this.checking = false;
      return false;
    }
    if (this.state == 5 || this.state == 3 || this.state == -1) {
      this.checkCount++;
      if (this.start > 0) {
        this.player.seekTo(this.start);
      }
      this.player.playVideo();
    }
    if (this.state == 1) {
      this.playerWrap.classList.add('use-vid');
      this.playerWrap.classList.remove('use-gif');
      clearInterval(this.checkTimer);
      this.checkTimer = 0;
      this.checking = false;
      return true;
    }
  }

  checkIfPlaying() {
    if (this.checking != true) {
      this.checking = true;
      this.checkCount = 0;
      if (this.state == 1 ){
        clearInterval(this.checkTimer);
      } else {
        this.checkTimer = setInterval(() => {
          this.playCheck()
        }, 200);
      }

    } else {
      return false
    }
  }

  onPlayerReady() {
    if (this.play == true) {
      this.player.playVideo();
      this.player.mute();
      this.checkIfPlaying()
    }
  }

  onPlayerStateChange(event) {
    if (event.data == window.YT.PlayerState.ENDED) {
      this.player.playVideo();
    }
  }
}
