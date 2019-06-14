const Task = require('../model/task');
const Status = require('http-status');

//get task by id
exports.getTask = (req, resp, next) => {
    const id = req.params.id;

    Task.findByPk(id).then((task) => {

        if(task){
            resp.status(Status.OK).send(task);
        }else{
            resp.status(Status.NOT_FOUND).send();
        }
    }).catch(error => next(error));
};

//get all tasks 
exports.getAllTask = (req, resp) =>{
    let limit = parseInt(req.query.limit || 0);
    let page = parseInt(req.query.page || 0);

    if(!Number.isInteger(limit) || !Number.isInteger(page)){
        resp.status(Status.BAD_REQUEST).send();
    }
    const ITENS_FOR_PAGE = 10;
    
    limit = limit > ITENS_FOR_PAGE || limit <= 0 ? ITENS_FOR_PAGE : limit;
    
    page = page <= 0 ? 0 : page * limit;

    Task.findAll({limit: limit, offset: page})
    .then(tasks => {
        if(tasks && tasks.length){
            resp.status(Status.OK).send(tasks);
        }else{
            resp.status(Status.NOT_FOUND).send();
        }
    }).catch(error => next(error));
};

//create task
exports.createTask = (req, resp, next) =>{
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    Task.create({
        title: title,
        author: author,
        description: description
    }).then(() => {
        resp.status(Status.CREATED).send();
    }).catch(error => next(error));
};

//update task
exports.updateTask = (req, resp, next) =>{
    const id = req.params.id;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    Task.findByPk(id)
        .then((task) =>{
            if(task){
                Task.update({
                    title: title,
                    author: author,
                    description: description
                },
                    {where:{id : id}}
                ).then(() => {
                    resp.status(Status.OK).send();
                }).catch(error => next(error));
            }else{
                resp.status(Status.NOT_FOUND).send();
            }
        }).catch(error => next(error));
};

//delete task
exports.deleteTask = (req, resp, next) =>{
    const id = req.params.id;

    Task.findByPk(id)
        .then((task) => {
            if(task){
                Task.destroy({
                    where: {id: id}
                }).then(() => {
                    resp.status(Status.OK).send();
                }).catch(error => next(error));
            }else{
                resp.status(Status.NOT_FOUND).send();
            }
        }).catch(error => next(error));
};