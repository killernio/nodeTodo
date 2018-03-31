let express = require("express");
let bodyParser = require("body-parser");

let { mongoose } = require("./db/mongoose.js");
let { Todo } = require("./models/todo.js");
let { User } = require("./models/user.js");

// body-parser umoznuje posilat json na server (parsuje string na js object)

// uvnitr rest API jsou zakladni CRUD operace (create, read, update, delete)
let app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {    // nastaveni Route .post(url, callback)
    var todo = new Todo({
        text: req.body.text     // text musi byt vyplnen
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});



app.listen(3000, () => {
    console.log("Started on port 3000");
});
