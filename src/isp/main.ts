import { Messaging } from './services/messagin';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const tenPercentDiscount = new TenPercentDiscount();
// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('Luiz', 'Henrique', '123.456.789.10');
const order = new Order(shoppingCart, messaging, persistency, customer);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Blusa', 79.9));
shoppingCart.addItem(new Product('Calça', 99.9));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
