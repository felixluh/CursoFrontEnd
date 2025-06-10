import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';
@Injectable({
  providedIn: 'root',
})
export class VagasService {
  // Serviço responsavel por acessar a Api e manter a logica de negócio
  private apiUrl = 'http://localhost:3007/vagas'; //endereço da Api

  constructor(private http: HttpClient) {} //injetar o httpClient no construtor so Service
  // HtppClient é uma class do Angular que permite fazer requisições Http para Apis

  //criar um métodos para a conexão com a ApiREST

  //get - obter a lista de vagas
  getVagas(): Observable<Vaga[]> {
    //observable é um tipo de dado que permite rabalhar com assincronismo
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  //post
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    //método para envar vaga para API
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
    //observable -> rxjs => tradutor do Json -> typescript
  }

  //put
  //nomeDoMétodo(parâmetros)
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    //coleção chave -> valor
    //http://localhost:3007/vagas"/"XXXX"
    const url = `${this.apiUrl}/${id}`; //construi a url(apaiurl+id)
    return this.http.put<Vaga[]>(url, vaga);
  }
  //delete
  deleteVaga(id: any): Observable<Vaga[]> {
    const url = this.apiUrl +"/"+ id;
    return this.http.delete<Vaga[]>(url);
  }
}
