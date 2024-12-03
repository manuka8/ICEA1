# 🌸 Flower Shop

## Overview

The **Flower Shop** is a React-based application that provides a simple and elegant interface for customers to browse, select, and purchase flowers. The application includes a product listing, a cart management system, and a responsive layout for a seamless user experience.

## Features

- 🌷 **Browse Products**: View a selection of flowers with prices.
- 🛒 **Add to Cart**: Dynamically add products to the cart with quantity selection.
- 🧮 **Calculate Total**: Automatically calculate the total price of selected items in the cart.
- 🎨 **Responsive UI**: Clean and responsive design for an optimal experience across devices.
- 💾 **Reusable Components**: Modular and reusable React components for better maintainability.

## Project Structure

```
src/
├── App.js                 # Main application file
├── assets/
│   ├── CSS/
│   │   └── layout.css     # Styles for layout and components
│   └── image/             # Product images
├── components/
│   ├── Cart.js            # Cart management component
│   ├── Product.js         # Single product display component
│   ├── Products.js        # Product listing and state management
│   └── FlowerDB.js        # Mock database for product data
├── index.js               # Entry point of the React application
└── index.css              # Global CSS styling
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/FlowerShop.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd FlowerShop
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the application:**
   ```bash
   npm start
   ```

## Usage

- **Homepage**: Displays a list of available flowers.
- **Adding Products**: Adjust the quantity and click "Add to Cart" to add items.
- **Cart**: View selected items with the total price displayed at the bottom of the cart table.

## Component Details

### `Products.js`

- Manages the product list and cart state.
- Passes product details and the `addToCart` handler to `Product` components.

### `Product.js`

- Renders a single product with an image, price, and quantity input.
- Handles the addition of products to the cart.

### `Cart.js`

- Displays all products added to the cart.
- Dynamically calculates and displays the total price.

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS (custom layout styles)
- **State Management**: React `useState`

## Future Enhancements

- 🌐 **Backend Integration**: Connect to a backend API for real product data.
- 📦 **Persistent Cart**: Save cart state in local storage or a database.
- 🔍 **Search and Filters**: Allow users to search and filter products.
- 🎁 **Checkout Process**: Add a checkout and payment flow.


## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---



