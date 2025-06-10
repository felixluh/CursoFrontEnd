export class Curiiculo {
  constructor(
    private _id: number,
    private _nome: string,
    private _idade: number,
    private _cpf: number,
    private _email: string,
    private _telefone: string,
    private _experiencia: string
  ) {}

  public get id(): number {
    return this._id;
  }
  public set id(id: number) {
    this._id = id;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }

  public get idade(): number {
    return this._idade;
  }
  public set idade(idade: number) {
    this._idade = idade;
  }

  public get cpf(): number {
    return this._cpf;
  }
  public set cpf(cpf: number) {
    this._cpf = cpf;
  }

  public get email(): string {
    return this._email;
  }
  public set email(email: string) {
    this._email = email;
  }

  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(telefone: string) {
    this._telefone = telefone
  }

  public get experiencia(): string {
    return this._experiencia;
  }
  public set experiencia(experiencia: string) {
    this._experiencia = experiencia;
  }

  public toMap():{[key:string]:any}{
    return{
      id: this._id,
      nome: this._nome,
      idade: this._idade,
      cpf: this._cpf,
      email: this.email,
      telefone: this.telefone,
      experiencia: this.experiencia,
    };
  }
  
}
