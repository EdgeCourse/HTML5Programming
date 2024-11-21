// Define a Product interface to represent items in the cart
interface Product {
    name: string;
    price: number;
}

// Define a CartItem interface to represent items with quantity
interface CartItem extends Product {
    quantity: number;
}

// Define a ShoppingCart class
class ShoppingCart {
    private items: CartItem[] = [];

    addItem(product: Product, quantity: number): void {
        const itemIndex = this.items.findIndex(item => item.name === product.name);
        if (itemIndex !== -1) {
            this.items[itemIndex].quantity += quantity;
        } else {
            this.items.push({ ...product, quantity });
        }
    }

    removeItem(product: Product): void {
        const itemIndex = this.items.findIndex(item => item.name === product.name);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}

// Usage example
const cart = new ShoppingCart();

const product1: Product = { name: 'Laptop', price: 999 };
const product2: Product = { name: 'Phone', price: 799 };

cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.removeItem(product1); // Remove one laptop

const totalPrice = cart.getTotalPrice();
console.log('Total Price:', totalPrice);