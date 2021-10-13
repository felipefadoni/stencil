import { Component, State, h } from '@stencil/core';
export class CustomClock {
  constructor() {
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
  static get is() { return "custom-clock"; }
  static get states() { return {
    "time": {}
  }; }
}
