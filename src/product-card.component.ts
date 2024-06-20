import { darkMode, lightMode } from './product-card.style';

const template = `
<template id="product-card-template">
  <style></style>
  <article class="product-card">
    <header class="product-card-header">
      <slot name="product-image"></slot>
    </header>
    <section class="product-card-content">
      <h1 class="product-card-content-title">
        <slot name="product-title"></slot>
      </h1>
      <p class="product-card-content-price">
        <slot name="product-price"></slot>
      </p>
      <p class="product-card-content-description">
        <slot name="product-description"></slot>
      </p>
    </section>
    <footer class="product-card-footer">
      <button id="button-buy" class="primary">Acheter</button>
      <button id="button-more">Voir plus</button>
    </footer>
  </article>
</template>
`;

export class ProductCardComponent extends HTMLElement {
  static observedAttributes = ['mode'];

  constructor() {
    super();

    const parser = new DOMParser();
    const dom = parser.parseFromString(template, 'text/html');

    const templateElt = dom.getElementById(
      'product-card-template'
    ) as HTMLTemplateElement;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateElt.content.cloneNode(true));
  }

  attributeChangedCallback(
    _name: string,
    _oldValue: string,
    newValue: string
  ): void {
    updateDisplayMode(this, newValue);
  }
}

function updateDisplayMode(element: HTMLElement, mode: string): void {
  const shadowRoot = element.shadowRoot!;
  shadowRoot.querySelector<HTMLStyleElement>('style')!.textContent =
    mode === 'light' ? lightMode : darkMode;
}
