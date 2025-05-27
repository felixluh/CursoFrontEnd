import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormComponent } from './cliente-form.component';

describe('ClienteFormComponent', () => { // define o bloco de testes para o ClienteFormComponet
  let component: ClienteFormComponent; // declara a variável do tipo ClienteFormComponent
  let fixture: ComponentFixture<ClienteFormComponent>; //declara a variavel do tipo ComponentFixture<ClienteFormComponent>

  beforeEach(() => { //executa antes de cada teste
    TestBed.configureTestingModule({ //configura o módulo de teste
      declarations: [ClienteFormComponent], //declara o componente que será testado
    });
    fixture = TestBed.createComponent(ClienteFormComponent); //cria uma instancia do componente ClienteFormCompoenent
    component = fixture.componentInstance; //atribui a instancia do componente a variável component
    fixture.detectChanges(); //executa a detecção de mudança para o componente
  });

  it('should create', () => { //define o teste que verifica se o componente foi criado corretamente
    expect(component).toBeTruthy(); //verifica se a variável component é verdadeira, ou seja, se o componente for creado corretamente
  });
});
