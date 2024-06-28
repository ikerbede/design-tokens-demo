import '../dist/css/variables.css';

export const darkMode: string = `
  h1, p {
    margin: 0;
  }
  .product-card {
    width: 300px;

    display: flex;
    flex-direction: column;

    font-family: var(--font-family-primary);
    background-color: var(--dark-card-background-color);
    border-radius: var(--dark-card-border-radius);
    box-shadow: var(--dark-card-box-shadow);
  }
  .product-card-header {
    width: 100%;
    height: 160px;
    background-color: white;
    border-radius: var(--dark-card-border-radius);
  }
  .product-card-content {
    padding: var(--dark-card-padding);

    display: flex;
    flex-direction: column;
    gap: var(--dark-card-gap);
  }
  .product-card-content-title {
    font-weight: var(--dark-card-title-font-weight);
    font-size: var(--dark-card-title-font-size);
    color: var(--dark-card-title-color);
  }
  .product-card-content-price {
    font-weight: var(--dark-card-price-font-weight);
    font-size: var(--dark-card-price-font-size);
    color: var(--dark-card-price-color);
  }
  .product-card-content-description {
    font-weight: var(--dark-card-comment-font-weight);
    font-size: var(--dark-card-comment-font-size);
    color: var(--dark-card-comment-color);
  }
  .product-card-footer {
    padding: var(--dark-card-padding);
    
    display: flex;
    justify-content: space-between;
  }
  .product-card-footer button {
    padding: var(--dark-button-padding);
    font-weight: var(--dark-button-font-weight);
    font-size: var(--dark-button-font-size);
    border: none;
    border-radius: var(--dark-button-border-radius);
    box-shadow: var(--dark-button-box-shadow);
  }
  .product-card-footer button.primary {
    color: var(--dark-button-primary-color);
    background-color: var(--dark-button-primary-background-color);
  }
  .product-card-footer button.secondary {
    color: var(--dark-button-secondary-color);
    background-color: var(--dark-button-secondary-background-color);
  }
`;

export const lightMode: string = `
  h1, p {
    margin: 0;
  }
  .product-card {
    width: 300px;

    display: flex;
    flex-direction: column;

    font-family: var(--font-family-primary);
    background-color: var(--light-card-background-color);
    border-radius: var(--light-card-border-radius);
    box-shadow: var(--light-card-box-shadow);
  }
  .product-card-header {
    width: 100%;
    height: 160px;
    background-color: white;
    border-radius: var(--light-card-border-radius);
  }
  .product-card-content {
    padding: var(--light-card-padding);

    display: flex;
    flex-direction: column;
    gap: var(--light-card-gap);
  }
  .product-card-content-title {
    font-weight: var(--light-card-title-font-weight);
    font-size: var(--light-card-title-font-size);
    color: var(--light-card-title-color);
  }
  .product-card-content-price {
    font-weight: var(--light-card-price-font-weight);
    font-size: var(--light-card-price-font-size);
    color: var(--light-card-price-color);
  }
  .product-card-content-description {
    font-weight: var(--light-card-comment-font-weight);
    font-size: var(--light-card-comment-font-size);
    color: var(--light-card-comment-color);
  }
  .product-card-footer {
    padding: var(--light-card-padding);
    
    display: flex;
    justify-content: space-between;
  }
  .product-card-footer button {
    padding: var(--light-button-padding);
    font-weight: var(--light-button-font-weight);
    font-size: var(--light-button-font-size);
    border: none;
    border-radius: var(--light-button-border-radius);
    box-shadow: var(--light-button-box-shadow);
  }
  .product-card-footer button.primary {
    color: var(--light-button-primary-color);
    background-color: var(--light-button-primary-background-color);
  }
  .product-card-footer button.secondary {
    color: var(--light-button-secondary-color);
    background-color: var(--light-button-secondary-background-color);
  }
`;
