onload = function() {
  rectDraw();
  circleDraw();
  lineDraw();
}

function rectDraw() {
  var cvs = document.getElementById('rectangle');
  var ctx = cvs.getContext('2d');

  // 塗りつぶし
  ctx.beginPath();
  ctx.fillRect(0, 0, 100, 100);
  // 線のみ
  ctx.beginPath();
  ctx.strokeRect(150, 0, 100, 100);
  // 線 + 塗りつぶし
  ctx.beginPath();
  ctx.strokeStyle = 'black';   //枠線
  ctx.fillStyle = 'red';       //塗りつぶし
  ctx.rect(300, 0, 100, 100);  //描画する座標を指定
  ctx.fill();                  //塗りつぶし
  ctx.stroke();                //fillのあとにstrokeで描画することで塗りつぶしに枠線を追加できる
  // □の中に□（図形の中に図形）
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.strokeRect(450, 0, 100, 100);
  ctx.clearRect(470, 20, 60, 60); //clearRectで描画された領域を消去できる
  ctx.fillRect(480, 30, 40, 40);  //clearRectで消去した領域に描画される
}

function circleDraw() {
  var cvs = document.getElementById('circle');
  var ctx = cvs.getContext('2d');

  // 線のみ
  // context.arc(x, y, radius(半径), startAngle(開始角度), endAngle(終了角度), counterclockwise(反時計回りにするかしないか))
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI*2, true);
  ctx.stroke();
  // 塗りつぶし
  ctx.beginPath();
  ctx.arc(200, 50, 50, 0, Math.PI*2, true);
  ctx.fill();
  // ●に線
  ctx.beginPath();
  ctx.arc(350, 50 ,50, 0, Math.PI*2, true);
  ctx.fill();

  // 点を作る
  var point = cvs.getContext('2d');
  point.beginPath();
  point.fillStyle = 'white';
  point.arc(350, 50, 2, 0, Math.PI*2, true);
  point.fill();

  // 線を作る
  var path = cvs.getContext('2d');
  path.beginPath();
  path.strokeStyle = 'white';
  path.moveTo(350, 50);       //線を引き始める開始の座標を指定するmoveTo
  path.lineTo(350, 0);
  path.stroke();
}

function lineDraw() {
  var cvs = document.getElementById('line');
  var ctx = cvs.getContext('2d');

  // 横線
  ctx.beginPath();
  ctx.moveTo(0, 50);
  ctx.lineTo(100, 50);
  ctx.stroke();

  // 斜め線
  ctx.beginPath();
  ctx.moveTo(150, 0);
  ctx.lineTo(250, 100);
  ctx.stroke();

  // 縦線
  ctx.beginPath();
  ctx.moveTo(350, 0);
  ctx.lineTo(350, 100);
  ctx.stroke();
}
