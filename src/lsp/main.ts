/*
Se F(x) é uma propriedade demonstrável sobre objetos x de tipo B .
Então F(y) deve ser verdadeiro para objetos y de tipo A , em que A é um subtipo de B .
*/

import { Messaging } from './services/messagin';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercentDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Blusa', 79.9));
shoppingCart.addItem(new Product('Calça', 99.9));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
