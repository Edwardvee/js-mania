export class Keys {
  static #left;
  static #right;
  static #up;
  static #down;

  static init() {
    this.#left = 0;
    this.#right = 0;
    this.#up = 0;
    this.#down = 0;
    window.addEventListener("keydown", this.keypress);
    window.addEventListener("keyup", this.keyrelease);
  }
  static set keys_info({ left, down, up, right }) {
    this.#left = left;
    this.#down = down;
    this.#up = up;
    this.#right = right;
  }
  static get keys_info() {
    return {
      left: this.#left,
      down: this.#down,
      up: this.#up,
      right: this.#right,
    };
  }
  static keypress = (e) => {
    switch (e.code) {
        case "KeyZ":
        this.keys_info = {...this.keys_info, left:1};
        break;
        case "KeyX":
        this.keys_info = {...this.keys_info, down:1};
        break;
        case "Comma":
        this.keys_info = {...this.keys_info, up:1};
        break;
        case "Period":
        this.keys_info = {...this.keys_info, right:1};
        break;
    }
  };
  static keyrelease = (e) => {
    switch (e.code) {
        case "KeyZ":
        this.keys_info = {...this.keys_info, left:0};
        break;
      case "KeyX":
        this.keys_info = {...this.keys_info, down:0};
        break;
      case "Comma":
        this.keys_info = {...this.keys_info, up:0};
        break;
      case "Period":
        this.keys_info = {...this.keys_info, right:0};
        break;
    }
  };
}
