/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface CustomButton {
    }
    interface CustomClock {
    }
}
declare global {
    interface HTMLCustomButtonElement extends Components.CustomButton, HTMLStencilElement {
    }
    var HTMLCustomButtonElement: {
        prototype: HTMLCustomButtonElement;
        new (): HTMLCustomButtonElement;
    };
    interface HTMLCustomClockElement extends Components.CustomClock, HTMLStencilElement {
    }
    var HTMLCustomClockElement: {
        prototype: HTMLCustomClockElement;
        new (): HTMLCustomClockElement;
    };
    interface HTMLElementTagNameMap {
        "custom-button": HTMLCustomButtonElement;
        "custom-clock": HTMLCustomClockElement;
    }
}
declare namespace LocalJSX {
    interface CustomButton {
    }
    interface CustomClock {
    }
    interface IntrinsicElements {
        "custom-button": CustomButton;
        "custom-clock": CustomClock;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-button": LocalJSX.CustomButton & JSXBase.HTMLAttributes<HTMLCustomButtonElement>;
            "custom-clock": LocalJSX.CustomClock & JSXBase.HTMLAttributes<HTMLCustomClockElement>;
        }
    }
}