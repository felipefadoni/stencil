import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const customButtonCss = ":host{display:block;background-color:red;color:white}";

let CustomButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("slot", null, h("button", null, "button"))));
  }
  static get style() { return customButtonCss; }
};

let CustomClock$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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

const CustomButton = /*@__PURE__*/proxyCustomElement(CustomButton$1, [1,"custom-button"]);
const CustomClock = /*@__PURE__*/proxyCustomElement(CustomClock$1, [0,"custom-clock",{"time":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      CustomButton,
  CustomClock
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { CustomButton, CustomClock, defineCustomElements };
