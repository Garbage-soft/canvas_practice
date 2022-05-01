var startAngle = 0;         // 開始角度
var endAngle = Math.PI / 2; // 終了角度 円を４等分するので1/2π
var Mode = {

};
var x = 0, y = 0, w = 100, h = 100;

var angle = 0.0;

var Mode = {
    waiting: 0,
    acceleration: 1,
    constant: 2,
    deceleration: 3,
    result: 4
};

var mode = Mode.waiting;

const RADIUS = 100;

// ----- switch文で使用する定数・変数 ----- //

const ACCEL = 0.01; //加速時の加速度
const DECEL = 0.01; //減速時の加速度
const MAX_SPEED = 1.0; //最大速度
const DECEL_RAND_LEVEL = 10; //減速の乱数の幅を設定
const DECEL_RAND_MAGNITUDE = 0.001; //減速の乱数の影響力を設定

var speed = 0.0;
var theta = 0.0;
var len = 0;
var resultDisplayed = false;

// ----- 矢印の描画に使用する定数 ----- //

const TRIANGLE_SIZE = 10;
const MARGIN = 10;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    translate(width/2, height/2);   // 座標をCanvasの中心地点に移動

    fill(255,0,0);
    push();
    translate(0, -RADIUS-MARGIN);
    triangle(0, 0, -TRIANGLE_SIZE/2, -TRIANGLE_SIZE, TRIANGLE_SIZE/2, -TRIANGLE_SIZE);
    pop();

    switch(mode) {
    case Mode.waiting:
        break;
    case Mode.acceleration:
        if(speed<MAX_SPEED){
            speed += ACCEL;
        }else{
            mode = Mode.constant;
            speed = MAX_SPEED;
        }
        theta += speed;
        theta-=(Math.floor(theta/2/PI))*2*PI;
        rotate(theta);
        break;
    case Mode.constant:
        theta += speed;
        theta -= (Math.floor(theta/2/PI))*2*PI;
        rotate(theta);
        break;
    case Mode.deceleration:
        if(speed>DECEL){
            speed -= DECEL+getRandomInt(-DECEL_RAND_LEVEL,DECEL_RAND_LEVEL)*DECEL_RAND_MAGNITUDE;
        }else{
            speed = 0.0;
            mode = Mode.result;
        }
        theta += speed;
        theta-=(Math.floor(theta/2/PI))*2*PI;
        rotate(theta);
        break;
    case Mode.result:
        rotate(theta);
        console.log('result')
        alert('stop!!!!!');
        mode = Mode.waiting
        break;
    }
    drawRoullet();
}

function drawRoullet() {
    fill(255, 0, 0);
    arc(0, 0, 200, 200, 0, PI/2);
    fill(0, 0, 255);
    arc(0, 0, 200, 200, PI/2, PI);
    fill(0, 128, 0);
    arc(0, 0, 200, 200, PI, PI*3/2);
    fill(255, 255, 0);
    arc(0, 0, 200, 200, PI*3/2, TWO_PI);
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

// function vartiacalText(t, x, y) {
//     push();
//     fill(255, 255, 255);
//     textAlign(CENTER, CENTER);
//     const vt = t.split('').join('\n');
//     text(vt, x, y);
//     pop();
// }

function start() {
    mode = Mode.acceleration;
    console.log(mode + 'start')
}

function stop() {
    mode = Mode.deceleration;
}
