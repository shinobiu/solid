import { Messaging } from './services/messagin';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Blusa', 79.9));
shoppingCart.addItem(new Product('Calça', 99.9));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
