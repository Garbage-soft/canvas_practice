onload = function() {
  rectDraw();
  circleDraw();
}

function rectDraw() {
  var cvs = document.getElementById('rectangle');
  var ctx = cvs.getContext('2d');

  ctx.beginPath();
  ctx.fillRect(0, 0, 100, 100);
  ctx.strokeRect(150, 0, 100, 100);
}

function circleDraw() {
  var cvs = document.getElementById('circle');
  var ctx = cvs.getContext('2d');

  // 線のみ
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI*2, true);
  ctx.stroke();
  // 塗りつぶし
  ctx.beginPath();
  ctx.arc(200, 50, 50, 0, Math.PI*2, true);
  ctx.fill();
}
