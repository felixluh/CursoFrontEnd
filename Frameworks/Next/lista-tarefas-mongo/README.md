mongodb.ts
1º passo: Criar o endereço de conecxão
2º passo: criar o cached para armazenar as conexões ao longo do projeto
3º passo: verificar se já existe uma conexão estabelecida comdb
4º passo: verifica se não existe uma promessa de conexão, e cria uma promise
5º passo: com a promise criada, estabelce uma conexão com o banco