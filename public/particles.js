//Name Space
var bg = bg || {};

//Get random int between two numbers
function randomRange(from, to, seed) {
  return Math.floor((seed ? seed : Math.random()) * (to - from + 1) + from);
}

//Fire
(function (b) {
  var cntr = document.getElementById("canvascontainer"),
    CANVAS_WIDTH = cntr.offsetWidth,
    CANVAS_HEIGHT = cntr.offsetHeight,
    canvas = [
      document.getElementById("canvas"),
      document.getElementById("buffer"),
    ],
    ctxs = [canvas[0].getContext("2d"), canvas[1].getContext("2d")],
    VISIBLE_CANVAS = 0,
    angle = 0,
    ASHES = [],
    int;

  function ash(o) {
    var particleIndex,
      j,
      m = Math.random(),
      p = randomRange(4, 8, m);

    if (o && o.x) this.x = o.x;
    else this.x = m * CANVAS_WIDTH;
    if (o && o.y) this.y = o.y;
    else this.y = m * CANVAS_HEIGHT;
    if (o && o.a) this.a = o.a;
    else this.a = m * (p - 4) + 1;
    this.r = randomRange(255, 207, m);
    this.g = randomRange(23, 3, m);
    this.b = randomRange(43, 49, m);

    if (o && o.dp) this.dp = o.dp;
    else {
      this.dp = [{ x: 0, y: 0 }];
      for (particleIndex = 0; particleIndex < p; particleIndex++) {
        j = particleIndex == 0 || p / 2 > particleIndex ? 1 : -1;
        this.dp.push({
          x: this.dp[particleIndex].x + randomRange(5, 30) * j,
          y: this.dp[particleIndex].y + randomRange(5, 30) * j,
        });
      }
    }
  }

  function draw() {
    var gradient, particleIndex, j, particle, ctx;
    if (VISIBLE_CANVAS == 0) {
      //Show the canvas
      canvas[0].style.visibility = "visible";
      canvas[1].style.visibility = "hidden";
      VISIBLE_CANVAS = 1;
    } else {
      //Show the buffer
      canvas[1].style.visibility = "visible";
      canvas[0].style.visibility = "hidden";
      VISIBLE_CANVAS = 0;
    }

    ctx = ctxs[VISIBLE_CANVAS];
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (particleIndex = 0; particleIndex < ASHES.length; particleIndex++) {
      particle = ASHES[particleIndex];
      gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.a
      );
      gradient.addColorStop(
        0,
        "rgba(" + particle.r + ", " + particle.g + ", " + particle.b + ", 1)"
      );
      gradient.addColorStop(
        0.9,
        "rgba(" +
          particle.r +
          ", " +
          particle.g +
          ", " +
          particle.b +
          ", " +
          randomRange(1, 10) / 10 +
          ")"
      );
      gradient.addColorStop(
        1,
        "rgba(" + particle.r + ", " + particle.g + ", " + particle.b + ", 0)"
      );

      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      for (j = 1; j < particle.dp.length; j++)
        ctx.lineTo(
          particle.x + particle.dp[j].x,
          particle.y + particle.dp[j].y
        );
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.7;
      ctx.fill();
    }

    update();
  }

  function update() {
    var particleIndex, particle;
    angle += 0.01;

    for (particleIndex = 0; particleIndex < ASHES.length; particleIndex++) {
      particle = ASHES[particleIndex];

      particle.y += Math.cos(angle + ASHES.length) + 1 + particle.a / 2;
      particle.x += Math.sin(angle) * 2;

      if (
        particle.x > CANVAS_WIDTH + 5 ||
        particle.x < -5 ||
        particle.y > CANVAS_HEIGHT
      ) {
        if (particleIndex % 3 > 0)
          ASHES[particleIndex] = new ash({
            y: -10,
            a: particle.a,
            d: particle.d,
            dp: particle.dp,
          });
        else {
          //Enter from the left
          if (Math.sin(angle) > 0)
            ASHES[particleIndex] = new ash({
              x: -5,
              a: particle.a,
              d: particle.d,
              dp: particle.dp,
            });
          //Enter from the right
          else
            ASHES[particleIndex] = new ash({
              x: CANVAS_WIDTH + 5,
              a: particle.a,
              d: particle.d,
              dp: particle.dp,
            });
        }
      }
    }
  }

  //Run
  canvas[0].width = CANVAS_WIDTH;
  canvas[0].height = CANVAS_HEIGHT;
  canvas[1].width = CANVAS_WIDTH;
  canvas[1].height = CANVAS_HEIGHT;
  for (var particleIndex = 0; particleIndex < 80; particleIndex++)
    ASHES.push(new ash());
  setInterval(draw, 33);
})(bg);
