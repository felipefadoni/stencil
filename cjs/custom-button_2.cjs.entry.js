'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0fa0251.js');

const customButtonCss = ":host{display:block;background-color:red;color:white}";

let CustomButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null, index.h("button", null, "button"))));
  }
};
CustomButton.style = customButtonCss;

let CustomClock = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.time = Date.now();
  }
  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }
  disconnectedCallback() {
    window.clearInterval(this.timer);
  }
  render() {
    const time = new Date(this.time).toLocaleTimeString();
    return index.h("span", null, time);
  }
};

exports.custom_button = CustomButton;
exports.custom_clock = CustomClock;
