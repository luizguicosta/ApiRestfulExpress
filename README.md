# ApiRestfulExpress
Api restful com express e conexão com mysql

Banco de dados precisa ser criado:<br />
CREATE DATABASE nomeDoBanco

Error:<br />
Unhandled rejection SequelizeConnectionError: Client does not support authentication protocol requested by server; consider upgrading MySQL client

correção:<br />
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'youpassword'

Endpoints:<br />
http://localhost:3000/api/task  (get e post)<br />
http://localhost:3000/api/task/1 (getById, delete e put)<br />
http://localhost:3000/api/task/?limit=10&page=1 (busca paginada e por limite de registros)

