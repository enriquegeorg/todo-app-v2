const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo-app-v2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});