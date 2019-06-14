# ApiRestfulExpress
Api restful com express e conexão com mysql

Banco de dados precisa ser criado:
CREATE DATABASE nomeDoBanco

Error: 
Unhandled rejection SequelizeConnectionError: Client does not support authentication protocol requested by server; consider upgrading MySQL client

correção:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'youpassword'

