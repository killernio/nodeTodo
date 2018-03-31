let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // nastavi aby se pouzival globani Promise (ten obsazeny v JS)

mongoose.connect("mongodb://localhost:27017/TodoApp");
// mongoose ceka na pripojeni nez neco udela

module.exports = {
    mongoose
};