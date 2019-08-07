module.exports = {
    dev:{
        database:{
            host: 'localhost',
            port: 3306,
            name: 'taskmanagerdb',
            dialect: 'mysql',
            user: 'root',
            password: 'your password'
        }
    },
    prod:{
        database:{
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
};
