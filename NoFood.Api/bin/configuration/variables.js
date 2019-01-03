const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:nofood123456@ds149034.mlab.com:49034/nofood'
    }
};

module.exports = variables;
