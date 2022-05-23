/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JgButton {
        "label": string;
    }
    interface JgInputContainer {
    }
    interface JgMenu {
        "anchor": HTMLElement;
        "value": string;
    }
    interface JgSearchBar {
        "label": string;
        "value": string;
    }
    interface JgTextfield {
        "value": string;
    }
}
declare global {
    interface HTMLJgButtonElement extends Components.JgButton, HTMLStencilElement {
    }
    var HTMLJgButtonElement: {
        prototype: HTMLJgButtonElement;
        new (): HTMLJgButtonElement;
    };
    interface HTMLJgInputContainerElement extends Components.JgInputContainer, HTMLStencilElement {
    }
    var HTMLJgInputContainerElement: {
        prototype: HTMLJgInputContainerElement;
        new (): HTMLJgInputContainerElement;
    };
    interface HTMLJgMenuElement extends Components.JgMenu, HTMLStencilElement {
    }
    var HTMLJgMenuElement: {
        prototype: HTMLJgMenuElement;
        new (): HTMLJgMenuElement;
    };
    interface HTMLJgSearchBarElement extends Components.JgSearchBar, HTMLStencilElement {
    }
    var HTMLJgSearchBarElement: {
        prototype: HTMLJgSearchBarElement;
        new (): HTMLJgSearchBarElement;
    };
    interface HTMLJgTextfieldElement extends Components.JgTextfield, HTMLStencilElement {
    }
    var HTMLJgTextfieldElement: {
        prototype: HTMLJgTextfieldElement;
        new (): HTMLJgTextfieldElement;
    };
    interface HTMLElementTagNameMap {
        "jg-button": HTMLJgButtonElement;
        "jg-input-container": HTMLJgInputContainerElement;
        "jg-menu": HTMLJgMenuElement;
        "jg-search-bar": HTMLJgSearchBarElement;
        "jg-textfield": HTMLJgTextfieldElement;
    }
}
declare namespace LocalJSX {
    interface JgButton {
        "label"?: string;
    }
    interface JgInputContainer {
    }
    interface JgMenu {
        "anchor"?: HTMLElement;
        "value"?: string;
    }
    interface JgSearchBar {
        "label"?: string;
        "value"?: string;
    }
    interface JgTextfield {
        "value"?: string;
    }
    interface IntrinsicElements {
        "jg-button": JgButton;
        "jg-input-container": JgInputContainer;
        "jg-menu": JgMenu;
        "jg-search-bar": JgSearchBar;
        "jg-textfield": JgTextfield;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jg-button": LocalJSX.JgButton & JSXBase.HTMLAttributes<HTMLJgButtonElement>;
            "jg-input-container": LocalJSX.JgInputContainer & JSXBase.HTMLAttributes<HTMLJgInputContainerElement>;
            "jg-menu": LocalJSX.JgMenu & JSXBase.HTMLAttributes<HTMLJgMenuElement>;
            "jg-search-bar": LocalJSX.JgSearchBar & JSXBase.HTMLAttributes<HTMLJgSearchBarElement>;
            "jg-textfield": LocalJSX.JgTextfield & JSXBase.HTMLAttributes<HTMLJgTextfieldElement>;
        }
    }
}