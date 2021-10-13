import { r as registerInstance, h, H as Host } from './index-d78f6f6d.js';

const customButtonCss = ":host{display:block;background-color:red;color:white}";

let CustomButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null, h("button", null, "button"))));
  }
};
CustomButton.style = customButtonCss;

let CustomClock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return h("span", null, time);
  }
};

export { CustomButton as custom_button, CustomClock as custom_clock };
