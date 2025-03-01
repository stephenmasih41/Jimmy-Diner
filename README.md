# 🍽️ Restaurant Menu App

This is my **5th solo project** for the Scrimba Frontend Path. This time, I used **GitHub Copilot** for the first time, and it was an amazing experience! Asking AI for help inside VS Code saves a lot of time and improves efficiency. 🤖💡

## 🛠️ Tech Stack

- **HTML** - Structure of the web application. 🏗️
- **CSS** - Styling and layout. 🎨
- **JavaScript (ES6+)** - Core functionality, rendering menu items, handling cart operations, and managing UI interactions. ⚙️

## 🚀 Features

- Displays a menu of food items with prices and ingredients. 🍔🍕🥗
- Allows users to add items to the cart. 🛒
- Displays the cart with the selected items and total price. 💳
- Provides an option to remove items from the cart. ❌
- Includes a payment modal to simulate order completion. 💰
- Displays a confirmation message after order completion. 🎉

## 📜 JavaScript Functions & Explanation

### `renderMenu()`
- Dynamically generates the menu from `menuArray`. 📋
- Attaches event listeners to the **Add (+) button** for adding items to the cart. ➕

### `addToCart(id)`
- Finds the selected item using its `id`. 🔍
- Adds the item to the `cart` array. 🛍️
- Calls `renderCart()` to update the UI. 🖥️

### `removeFromCart(index)`
- Removes an item from the cart based on its index. ❌
- Updates the cart UI by calling `renderCart()`. 🔄

### `renderCart()`
- Displays all items in the cart. 🛒
- Calculates and updates the total price. 💲
- Allows users to remove items from the cart. ❌
- Controls the visibility of the cart modal based on whether the cart is empty or not. 👀

### Order Completion & Payment

#### `completeOrder` Button
- Opens the payment modal when clicked. 💳

#### `payBtn` Button
- Retrieves the customer's name from the input field. 📝
- Displays a thank-you message. 🙏
- Hides the modal and resets the cart. 🔄

## 📚 Learning Takeaways

- First-time experience using **GitHub Copilot**: Super helpful in generating code suggestions and improving workflow. 🤖
- Improved **DOM manipulation skills** with JavaScript. 🖥️
- Better understanding of **event delegation and state management** in a simple shopping cart system. 📊

## 🔮 Future Improvements

- Enhance UI/UX with better animations and styles. ✨
- Implement **local storage** to retain cart data. 💾
- Add a real **payment gateway** for actual transactions. 💳

---

This project was a fun learning experience, and I look forward to building more interactive applications! 🚀
