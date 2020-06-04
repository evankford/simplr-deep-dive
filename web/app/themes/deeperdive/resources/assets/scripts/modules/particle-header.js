
	var canvas = document.getElementById("scene"),
    ctx = canvas.getContext("2d"),
    particles = [],
    amount = 0,
    mouse = { x: 0, y: 0 },
    radius = 1;

  var colors = ["#ffffff", "#ffffff", "#eafaff", "#fffaea", "#ffebfa"];

  var copy = document.getElementById("copy");


  var ww = (canvas.width = window.innerWidth);
  var wh = (canvas.height = window.innerHeight);


   if (ww < 800) {
     radius= 0.7;
   }
   var radiusModifier = Math.min(1.6, Math.max((1/650) * ww, 0.95));
   var radiusMin = Math.min(1.6, Math.max((1/650) * ww, 0.95));

  function Particle(x, y) {

    this.dest = {
      x: x,
      y: y
    };
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.r = Math.random() * radiusModifier + radiusMin;
    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.94;

    this.color = colors[Math.floor(Math.random() * 6)];
  }

  Particle.prototype.render = function() {
    this.distX = this.dest.x - this.x;
    this.distY = this.dest.y - this.y;
    this.accX = this.distX / 600;
    this.accY = this.distY / 600;

    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.modX = Math.min(
      Math.max(
        Math.pow(((Math.abs(this.distX) / 0.65) * ww) / 100000, 0.05) * 0.9,
        0.95
      ),
      1.25
    );
    this.modY = Math.min(
      Math.max(
        Math.pow(((Math.abs(this.distY) / 0.65) * ww) / 100000, 0.05) * 0.9,
        0.95
      ),
      1.25
    );

    this.vx *= this.modX;
    this.vy *= this.modY;

    this.x += this.vx;
    this.y += this.vy;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();

    var a = this.x - mouse.x;
    var b = this.y - mouse.y;

    var distance = Math.sqrt(a * a + b * b);
    if (distance < radius * 70) {
      this.accX = (this.x - mouse.x) / 100;
      this.accY = (this.y - mouse.y) / 100;
      this.vx += this.accX;
      this.vy += this.accY;
    }
  };

  function onMouseMove(e) {
    mouse.x = e.clientX - canvas.getBoundingClientRect().left;
    mouse.y = e.clientY - canvas.getBoundingClientRect().top;
  }

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }

  function onTouchEnd(e) {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  function initScene() {
    ww = canvas.width = window.innerWidth;
    wh = canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold " + ww / 8 + "px rubik";

    if (ww < 800) {
      ctx.font = "bold " + ww / 4.9 + "px rubik";
    }

    ctx.textAlign = "center";
    ctx.fillText(copy.textContent.toUpperCase(), ww / 2, wh / 2);

    var data = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";



    particles = [];
    for (var i = 0; i < ww; i += Math.round(ww / 180)) {
      for (var j = 0; j < wh; j += Math.round(ww / 180)) {
        if (data[(i + j * ww) * 4 + 3] > 180) {
          particles.push(new Particle(i, j));
        }
      }
    }
    amount = particles.length;
  }

  function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
      particles[i].render();
    }
  }





export default class ParticleHeader {
  constructor(el) {
    this.el = el
    this.run = this.runScene.bind(this);
    this.initiated = false
    this.init();
  }

  runScene(observed) {
    if (observed[0].isIntersecting == true) {
      if (!this.initiated) {
        initScene();
        this.initiated = true
        requestAnimationFrame(render);
      }
      window.addEventListener("resize", initScene);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
    } else {
      window.removeEventListener("resize", initScene);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    }
  }

  init() {
    this.observer = new IntersectionObserver(this.run, { threshold: 0.6 });
    this.observer.observe(this.el);
  }
}