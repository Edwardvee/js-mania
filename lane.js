import { Keys } from "./keys.js";
import { Settings } from "./settings.js";
export const drawPressedLane = (ctx, l, d, u, r) => {

  let fixedsize = 125
  let fixedheight = 450

  if (Keys.keys_info.left == 1) {
    ctx.drawImage(l, fixedheight, 525, fixedsize, fixedsize);
  }
  if (Keys.keys_info.down == 1) {
    ctx.drawImage(u, fixedheight + fixedsize, 525, fixedsize, fixedsize);
  }
  if (Keys.keys_info.up == 1) {
    ctx.drawImage(d, fixedheight + fixedsize * 2, 525, fixedsize, fixedsize);
  }
  if (Keys.keys_info.right == 1) {
    ctx.drawImage(r, fixedheight + fixedsize * 3, 525, fixedsize, fixedsize);
  }
};

let HitPosition = window.innerHeight - 50;

export const drawLane = (ctx, l, d, u, r, line) => {


  let fixedsize = 125
  let fixedheight = 450


  ctx.beginPath();
  ctx.rect(450, 0, 500, 13720);
  ctx.fill();
  ctx.drawImage(line, fixedheight, HitPosition, 500, 1);

  ctx.drawImage(l, fixedheight, 525, fixedsize, fixedsize);
  ctx.drawImage(u, fixedheight + fixedsize, 525, fixedsize, fixedsize);
  ctx.drawImage(d, fixedheight + fixedsize * 2, 525, fixedsize, fixedsize);
  ctx.drawImage(r, fixedheight + fixedsize * 3, 525, fixedsize, fixedsize);



};

//console.log(Settings.dt)

let laneheight = window.innerHeight
//laneheight/2 + laneheight/2*(Hitposition/laneheight)/  scrollvelocity

let lpos = 0;
let dpos = 0;
let upos = 0;
let rpos = 0;

let origintime = 318;
let offset = 100
let timerange = 7500
let scrollLength = 1000

// (6860 + 6860 * (HitPosition/480)) / 15 = Milliseconds
// 1000px = 5000ms
// 5000ms * (1100px / 1000px) = 5500px

//7000  - 5500 = 1500ms


// LHms * T  = LHpx/SVpx
//c px/sv = c * px

// x = scrollspeed * tms

//60 -> 1000 * 60
// x= 615 


export const drawKeys = (ctx, l, d, u, r, deltatime) => {
  let movementframe = 550 / 0.615 
  let speed = 1 
  const movementThisFrame = deltatime * movementframe  ;
  let scrollspeed= 1.5
  ctx.drawImage(l, 450,lpos-(956*speed*deltatime),125, 125)

  lpos += movementThisFrame  *scrollspeed
  dpos += movementThisFrame *scrollspeed
  upos += movementThisFrame *scrollspeed
  rpos +=movementThisFrame  *scrollspeed
};

export const drawUpNotes = (ctx, speed, note, keypos, time, deltatime)=>{
   ctx.drawImage(u, 575, time * speed * deltatime, 125,125)
}