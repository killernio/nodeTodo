let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // nastavi aby se pouzival globani Promise (ten obsazeny v JS)

mongoose.connect("mongodb://localhost:27017/TodoApp");
// mongoose ceka na pripojeni nez neco udela

// mongoose model s nastavenim
let Todo = mongoose.model("Todo", {          // .model(string, object)
    text: {             // text: je property
        type: String,
        required: true,      // znaci ze hodnota musi existovat
        minlength: 1,        // minimalni delka
        trim: true          // odstrani white spaces pred a za textem
    },
    completed: {
        type: Boolean,
        default: false,     // defaultni hodnota pokud neni zadana

    },
    completedAt: {
        type: Number,
        default: null
    }
});

// USER model do collekce user (automaticky to prepisuje na lowerCase)
let User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

let createUser = new User({
    email: "    kuchta.m@seznam.cz   "
})

createUser.save().then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
},
    (err) => {
        console.log("Erorr with adding user", err);
    });


// vytvoreni nove instance
let newTodo = new Todo({               // volame Todo funkci jako konstructor function (novou instanci)
    text: "Cook dinner"
});

let addTodo = new Todo({               // volame Todo funkci jako konstructor function (novou instanci)
    // text: 23,                       // mongoose automaticky prevadi cislo na string, takze to bude fungovat
    // text:true                            // toto taky bude fungovat
    text: "Go home"
    // completed: true,
    // completedAt: 31032018
});

// zapis do DB
// addTodo.save().then((result) => {
//     console.log(JSON.stringify(result, undefined, 2));
// },
//     (err) => {
//         console.log("error: ", err);
//     })