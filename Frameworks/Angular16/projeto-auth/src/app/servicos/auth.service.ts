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
   // - Verfica se o usuário já existe => se não existir, cadstra o usuário
  registrar(usuario: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(res => {
        if (res.length>0){
          return throwError(() => new Error('Usuário já Cadastrado'));
        }
        return this.http.post<any>(this.apiUrl, usuario);
      })
    );
  }

  //método login
  // - Verifica se o usuário existe => se existir, grava os dados no localStrorage
login(credenciais: any):Observable<boolean>{
  return this.http.get<any[]>(
    `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuario => {
        if (usuario.length > 0) {
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
        return true;
        }
        return false;
      })
  )
}

//método para verificar se o usuário está autenticado
logout(){
  localStorage.removeItem(this.CHAVE_AUTH);
  this.router.navigate(['/login']);
}

estaAutenticado(): boolean {
  return !!localStorage.getItem(this.CHAVE_AUTH);
}

usuarioAtual(): any{
  return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}')
}


}
