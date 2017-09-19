let triangulate = require("delaunay-triangulate");

const width = 1000;
const height = 800;
const state = {
  displayText: ""
};

window.changeText = newValue => {
  state.displayText = newValue;
};

window.onload = function(event) {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  canvas.height = height;
  canvas.width = width;

  let back = document.getElementById("back");
  back.height = height;
  back.width = width;
  let bctx = back.getContext("2d");

  // let img = document.getElementById('img.jpg')
  let img = new Image();
  img.crossOrigin = "anonymous";
  img.src = "./img.jpg";

  img.onload = () => {
    bctx.drawImage(img, 0, 0, width, height);

    function drawPoint({ x, y }) {
      console.log(x, y);
      ctx.fillRect(x, y, 5, 5);
    }

    let points = [];
    for (let i = 0; i < 1500; i++)
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        spdx: Math.random() * 0.4 + 0.1,
        spdy: Math.random() * 0.4 + 0.1
      });

    // console.log(pntsArr)

    function getColorAtPoint(context, { x, y }) {
      return context.getImageData(parseInt(x), parseInt(y), 1, 1).data;
    }

    function get3ColorAvg(context, pnts) {
      let c = pnts.map(pnt => getColorAtPoint(context, pnt));

      let avg = [
        parseInt((c[0][0] + c[1][0] + c[2][0]) / 3),
        parseInt((c[0][1] + c[1][1] + c[2][1]) / 3),
        parseInt((c[0][2] + c[1][2] + c[2][2]) / 3)
      ];

      return avg;
    }

    // getColorAtPoint(ctx, {x:200, y:200})
    // ctx.fillRect(200, 100, 10, 10)

    function updatePnt(pnt) {
      pnt.x += pnt.spdx;
      pnt.y += pnt.spdy;

      pnt.x %= width;
      pnt.y %= height;
    }

    function step() {
      points.map(updatePnt);

      const pntsArr = points.map(({ x, y }) => [x, y]);

      const triangles = triangulate(pntsArr);

      triangles.forEach(function(tri, index) {
        const pntsNow = tri.map(pntNum => points[pntNum]);

        const color = get3ColorAvg(bctx, pntsNow);

        tri.color = color;
      });

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.15;

      triangles.forEach(tri => {
        let pntsNow = tri.map(pntNum => points[pntNum]);

        let color = tri.color;
        ctx.fillStyle =
          "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";

        ctx.beginPath();
        ctx.moveTo(pntsNow[0].x, pntsNow[0].y);
        ctx.lineTo(pntsNow[1].x, pntsNow[1].y);
        ctx.lineTo(pntsNow[2].x, pntsNow[2].y);
        ctx.closePath();
        ctx.fill();

        // ctx.stroke()
      });

      ctx.globalCompositeOperation = "destination-in";
      ctx.globalAlpha = 1;
      ctx.font = "bold 360px hoge,impact";

      if (state.displayText.length) ctx.fillText(state.displayText, 50, 350);

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  };

  // points.forEach(drawPoint)
};
