import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://lohost:3008/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';


  constructor(private router: Router, private http: HttpClient) { }
  //método registrar
   // - Verfica se o usuário já existe => se não existir, cadastra o usuário
  registrar(usuario: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(res => {
        // se o email já existe
        if (res.length>0){
          //criando um erro para o sistema -> para que o erro seja tratado, rodar a função dentro de um try/cath
          return throwError(() => new Error('Usuário já Cadastrado')); //para o programa aqui, se o usuário já existir
        }
        // caso contrário -> cadastrar o usuário novo
        return this.http.post<any>(this.apiUrl, usuario);
      })
    );
  }

  //método login
  // - Verifica se o usuário existe => se existir, grava os dados no localStrorage
login(credenciais: any):Observable<boolean>{
  return this.http.get<any[]>(
    //passar o email e a senha para procurar o usúario no BD
    `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe( 
      map(usuario => {
        //usúario encontrado
        if (usuario.length > 0) {
          //LocalStorage grava no aramazenamento interno do navegador (a chave de autenticação e as informações do usúario)
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
        return true;
        }
        //caso não seja encontrado -> retorna falso
        return false;
      })
  )
}

//método para verificar se o usuário está autenticado
logout(){
  // limpo o armazenamento interno
  localStorage.removeItem(this.CHAVE_AUTH);
  //rediciona para tela de login/home
  this.router.navigate(['/login']);
}

// função para verificar se o usuário está autenticado 
estaAutenticado(): boolean {
  //uso de dupla negação => transformo em uma boolean
  //verifica se existe a chave de autenticação no LocalStrorange
  //!! -> se retornar vazio -> falso, agora se retornar texto -> true
  return !!localStorage.getItem(this.CHAVE_AUTH);
}

//função para pegar as informações do Usuário autenticado
usuarioAtual(): any{
  // converte para objeto Json e retorna as informções do usuário
  return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}')
}


}
