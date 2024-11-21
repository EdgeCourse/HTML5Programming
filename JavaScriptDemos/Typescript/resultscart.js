var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define a ShoppingCart class
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (product, quantity) {
        var itemIndex = this.items.findIndex(function (item) { return item.name === product.name; });
        if (itemIndex !== -1) {
            this.items[itemIndex].quantity += quantity;
        }
        else {
            this.items.push(__assign(__assign({}, product), { quantity: quantity }));
        }
    };
    ShoppingCart.prototype.removeItem = function (product) {
        var itemIndex = this.items.findIndex(function (item) { return item.name === product.name; });
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        return this.items.reduce(function (total, item) { return total + item.price * item.quantity; }, 0);
    };
    return ShoppingCart;
}());
// Usage example
var cart = new ShoppingCart();
var product1 = { name: 'Laptop', price: 999 };
var product2 = { name: 'Phone', price: 799 };
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.removeItem(product1); // Remove one laptop
var totalPrice = cart.getTotalPrice();
console.log('Total Price:', totalPrice);
