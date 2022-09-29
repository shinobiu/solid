// Código sem principios

type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class LegacyShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    console.log(this._items);
    this.sendMessage(`Seu pedido foi recebido`);
    this.sendMessage(`O valor total é ${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('O carrinho foi limpo');
    this._items.length = 0;
  }
}

const legacyShoppingCart = new LegacyShoppingCart();

legacyShoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
legacyShoppingCart.addItem({ name: 'Blusa', price: 79.9 });
legacyShoppingCart.addItem({ name: 'Calça', price: 99.9 });

console.log(legacyShoppingCart.orderStatus);
/* console.log(legacyShoppingCart.items);
console.log(legacyShoppingCart.total());
 */
legacyShoppingCart.checkout();
console.log(legacyShoppingCart.orderStatus);
