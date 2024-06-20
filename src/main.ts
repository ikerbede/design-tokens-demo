import './style.css';
import { Product } from './product.type.ts';
import { ProductCardComponent } from './product-card.component.ts';

customElements.define('product-card', ProductCardComponent);

const product: Product = {
  imageUrl: '/paintings.webp',
  title: 'Assortiment de peinture acrylique mat',
  price: '7, 83 €',
  description:
    "Ce lot de pots de peinture Acrylique mate A-colors contient 6 pots de 20 ml de peinture prête à l'emploi. Vous apprécierez les belles couleurs de cette peinture acrylique : chair, orange, fuchsia, bleu, vert clair et marron. Diluable à l'eau.",
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <form>
    <fieldset>
      <legend>Display mode:</legend>

      <input type="radio" id="radio-dark" name="mode" value="dark" checked />
      <label for="radio-dark">Dark</label>

      <input type="radio" id="radio-light" name="mode" value="light" />
      <label for="radio-light">Light</label>
    </fieldset>
  </form>

  <product-card mode="dark">
    <img
      slot="product-image"
      src="${product.imageUrl}"
      alt=""
      width="300"
      height="160"
    />
    <span slot="product-title">${product.title}</span>
    <span slot="product-price">${product.price}</span>
    <span slot="product-description">${product.description}</span>
  </product-card>
`;

document
  .querySelector<HTMLInputElement>('#radio-dark')
  ?.addEventListener('input', (event: Event) =>
    setupDisplayMode((event.target as HTMLInputElement).value)
  );
document
  .querySelector<HTMLInputElement>('#radio-light')
  ?.addEventListener('input', (event: Event) =>
    setupDisplayMode((event.target as HTMLInputElement).value)
  );

function setupDisplayMode(mode: string): void {
  document
    .querySelector<HTMLParagraphElement>('product-card')!
    .setAttribute('mode', mode);
}
