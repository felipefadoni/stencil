import { Component, Host, h } from '@stencil/core';
export class CustomButton {
  render() {
    return (h(Host, null,
      h("slot", null,
        h("button", null, "button"))));
  }
  static get is() { return "custom-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["custom-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["custom-button.css"]
  }; }
}
