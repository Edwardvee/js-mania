import {Chart} from "./chart.js";
import {Settings} from "./settings.js";
import {Keys} from "./keys.js";

class Game {
    constructor (){
        this.chart = new Chart();
        this.previoustime = Date.now();
        Keys.init()
        this.run();
    }
    run = () => {
        let newtime = Date.now();
        Settings.dt = (newtime - this.previoustime) / 1000;
        this.previoustime = newtime;
        this.chart.run();
        console.log(Settings.dt)
        requestAnimationFrame(this.run)

    }
}
document.addEventListener("DOMContentLoaded", () => { new Game();});
