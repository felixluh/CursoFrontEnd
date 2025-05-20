import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produtos.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
private clientes: Cliente[] = [];
private produtos: Produto[] = []´;
private pedidos: Pedido[] = [];

  constructor() { }

  //métodos
  getClientes(): Cliente[] {
    return this.clientes;
  }

  adicionarClientes(cliente: Cliente): void{
    this.clientes.push(cliente);
  }

  getProdutos(): Produto[]{
    return this.produtos;
  }

  adicionarProduto(produto: Produto): void{
    this.produtos.push(produto);
  }

  getPedidos(): Pedido[]{
    return this.pedidos;
  }
  adicionarPedidos(pedido: Pedido): void{
    this.pedidos.push(pedido);
  }

}
