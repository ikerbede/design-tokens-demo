export const darkMode: string = `
  h1, p {
    margin: 0;
  }
  .product-card {
    width: 300px;

    display: flex;
    flex-direction: column;

    font-family: "Inter";
    color: white;
    background-color: #444444;
  }
  .product-card-header {
    width: 100%;
    height: 160px;
    background-color: white;
  }
  .product-card-content {
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .product-card-content-title {
    font-weight: 700;
    font-size: 16px;
    color: #B0FFD9;
  }
  .product-card-content-price {
    font-weight: 700;
    font-size: 32px;
  }
  .product-card-content-description {
    font-weight: 400;
    font-size: 10px;
  }
  .product-card-footer {
    padding: 16px;
    
    display: flex;
    justify-content: space-between;
  }
  .product-card-footer button {
    padding: 8px 32px;
    font-size: 16px;
    font-weight: 400;
  }
  .product-card-footer button.primary {
    background-color: #B0FFD9;
  }
  .product-card, .product-card-footer button {
    border-radius: 0;
    box-shadow: 0 4px 4px 0 #00000040;
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

    font-family: "Inter";
    color: #444444;
    background-color: #B0FFD9;
  }
  .product-card-header {
    width: 100%;
    height: 160px;
  }
  .product-card-content {
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .product-card-content-title {
    font-weight: 700;
    font-size: 16px;
    color: #9E63FF;
  }
  .product-card-content-price {
    font-weight: 700;
    font-size: 32px;
  }
  .product-card-content-description {
    font-weight: 400;
    font-size: 10px;
  }
  .product-card-footer {
    padding: 16px;
    
    display: flex;
    justify-content: space-between;
  }
  .product-card-footer button {
    padding: 8px 32px;
    font-size: 16px;
    font-weight: 400;
    border: none;
  }
  .product-card-footer button.primary {
    color: white;
    background-color: #9E63FF;
  }
  .product-card, .product-card-footer button {
    border-radius: 16px;
    box-shadow: 0 4px 4px 0 #00000040;
  }
`;
