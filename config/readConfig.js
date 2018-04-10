var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${configValues.username}:${configValues.password}@ds139219.mlab.com:39219/real_estate`;
    }
}