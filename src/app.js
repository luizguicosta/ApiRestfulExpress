const http = require('http');
const express = require('express');
const routeTask = require('./routes/routeTask')
const sequelize = require('./database/database');
const Status = require('http-status');


const app = express();

//convert urlencoded or json for client
app.use(express.urlencoded());
app.use(express.json());

app.use('/api', routeTask);

app.use((req, resp, next) =>{
    resp.status(Status.NOT_FOUND).send();
});

//error server
app.use((error, req, resp, next) =>{
    resp.status(Status.INTERNAL_SERVER_ERROR).json({error});
})

//connection database end create table
//sequelize.sync({force: true}).then(() => { //to drop and create the table when start api
sequelize.sync().then(() => {
    const port = process.env.PORT || 3000;
    app.set('port', port);
    const server = http.createServer(app);

    server.listen(port);
});