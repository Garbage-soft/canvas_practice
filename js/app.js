// p5.jsで毎回描くことになる定型的な部分
//最初に一回だけ実行する
function setup() {
  createCanvas(400, 400); // createCanvas(width, height);
  background(0);     // https://p5js.org/reference/#/p5/background
}



// canvasの描画 60フレーム/秒の間隔で呼び出し
function draw() {
  // ★枠線の描画
  fill(255, 255, 255);        //塗りつぶしの色を指定（白）
  rect(0, 0, width, height);  //canvasの左上、座標(0,0)からcanvasのサイズに沿って四角形を描画
  translate(width/2, height/2); //座標を移動。ここでは（200, 200）に移動・枠線内中央



  switch(mode) {
    case Mode.waiting:
          break;
    case Mode.spin:
          rotate(angle);
          angle += 1;
          break;
    case Mode.stop:
          break;
  }

  drawCircle();
}

function drawCircle() {
    // ★半円を二つ描画して一つの円にする
    fill(0, 0, 255);            //塗りつぶし（青）
    // p5.jsでのarcは引数の指定が違うので注意
    // arc(x, y, width, height, startAngle, endAngle, [mode](描画モード));
    // 角度の指定は度数(0～360°)ではなく、ラジアン(0～2π)
    arc(0, 0, 100, 100, 0, 4);
    fill(255, 0, 0);            //塗りつぶし（赤）
    arc(0, 0, 100, 100, Math.PI, 0);
}



var Mode = {            //列挙型(enum)
    waiting: 0,
    spin: 1,
    stop: 2,
}
var mode = Mode.waiting;

var angle = 0.0;

function spin() {
  mode = Mode.spin
}

function stop() {
  mode = Mode.stop;
}
