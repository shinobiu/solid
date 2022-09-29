import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../services/messagin';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messagin: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    console.log(this.cart.items);
    this.messagin.sendMessage(`Seu pedido foi recebido`);
    this.messagin.sendMessage(`O valor total é ${this.cart.total()}`);
    this.messagin.sendMessage(
      `O valor total com desconto é ${this.cart.totalWithDiscount()}`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
