import { Cliente } from './cliente.model';
import { Produto } from './produtos.model';


export class Pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public produtos: Produto[],
    public desconto: number
  ) {}

  calcularTotal(): number {
    const total = this.produtos.reduce((acc,p)=> acc + p.preco, 0);
    return total - total * (this.desconto / 100);
  }
}
