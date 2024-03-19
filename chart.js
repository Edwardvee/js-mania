import { Keys } from "./keys.js";
import { drawKeys, drawLane, drawPressedLane } from "./lane.js";

export class Chart {
  constructor() {
    this.setup();
  }
  setup = async () => {
    this.canvas = document.querySelector("canvas");
   
    this.ctx = this.canvas.getContext("2d");
    this.k_left = new Image(75, 143);
    this.k_left.src = "img/k_left.png";
    this.k_left.style.opacity =  "0";
    this.k_down = new Image(75, 143);
    this.k_down.src = "img/k_down.png";
    this.k_up = new Image(75, 143);
    this.k_up.src = "img/k_up.png";
    this.k_right = new Image(75, 143);
    this.k_right.src = "img/k_right.png";

    this.kd_left = new Image(75, 143);
    this.kd_left.src = "img/kd_left.png";
    this.kd_down = new Image(75, 143);
    this.kd_down.src = "img/kd_down.png";
    this.kd_up = new Image(75, 143);
    this.kd_up.src = "img/kd_up.png";
    this.kd_right = new Image(75, 143);
    this.kd_right.src = "img/kd_right.png";

    this.left = new Image(75, 143);
    this.left.src = "img/left.png";
    this.down = new Image(75, 143);
    this.down.src = "img/down.png";
    this.up = new Image(75, 143);
    this.up.src = "img/up.png";
    this.right = new Image(75, 143);
    this.right.src = "img/right.png";
    this.setScreenSize()
     
  };
  setScreenSize() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.canvas.width = 1000;
    this.canvas.height = 13720;
  }

  run() {
  
    drawLane(this.ctx, this.k_left, this.k_down, this.k_up, this.k_right);
    drawPressedLane(this.ctx, this.kd_left, this.kd_down, this.kd_up, this.kd_right);
    drawKeys(this.ctx, this.left, this.down, this.up, this.right);
    //console.log(Keys.keys_info);
  }
}
