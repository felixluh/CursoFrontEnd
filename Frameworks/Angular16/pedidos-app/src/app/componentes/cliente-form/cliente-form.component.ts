import { Component } from '@angular/core'; //importa o decorador Component do Angular core
import { Cliente } from 'src/app/models/cliente.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({ //decorador que define o componente ClienteFormComponent
  selector: 'app-cliente-form', //define o selector do componente
  templateUrl: './cliente-form.component.html', //define o template HTML do componente
  styleUrls: ['./cliente-form.component.scss'], //define o estilo CSS do componente
})
export class ClienteFormComponent { //classe do componente ClienteFormComponent
  nome: string = ''; //propriedade que armazena o nome do cliente

  constructor(private dadosService: DadosService) {} //inicializa o componente com o serviço DadosService

  salvarCliente() { //método que salva o Cliente
    const cliente = new Cliente( // cria uma nova instância de Cliente
      this.dadosService.getClientes().length + 1, //id -> quantidade de clientes na lista +1
      this.nome // nome do cliente
    );
    this.dadosService.adicionarClientes(cliente); // chama o método do serviço DdadosService para adicionar o cliente à lista
    this.nome = ''; // limpa o campo de nome após adicionar o cliente
    alert('Cliente Adicionado com Sucesso!!!'); // exibe um alerta informado que o cliente foi adicionado com sucesso
  }
}
