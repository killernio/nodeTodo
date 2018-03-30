// const MongoClient = require("mongodb").MongoClient; // pull of MongoClient from library

// to stejne jako nahore nastavi MongoClient na hodnotu MongoClient property
const { MongoClient, ObjectID } = require("mongodb"); // pull of MongoClient from library

// let obj = new ObjectID();       // vytvori nove ID
// console.log(obj);

// Object destruction
// let us pull out properties from an object creating variables
let user = { name: "Majkl", age: 25 };
let { name } = user;      // vyvori novou promenou a nastavi to na jmeno 
// v promenne user a klice name (muzeme pouzivat hodnotu pouzitou v promenne)
console.log(name)       // print Majkl

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {    // connect to database (string, callback function)
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("Users");        // access to DB reference (k jake db chceme pristupovat)

    // insert data
    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection("Users").insertOne({  // vlozi jeden zaznam do kolekce Users
    //    // _id:123,        // vytvorime vlastni id
    //     name: "Majkl",
    //     age: 25,
    //     location: "Czech Republic"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("error to fetch data to User DB");
    //     }
    //   //  console.log(JSON.stringify(result.ops, undefined, 2));      // result.ops vezme vsechny dokumenty ktere byly vlozeny
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));      // vrati nam timestamp (kdy bylo vytvoreno)
    // });

    client.close()  // close connection with DB server (dissconnect)
});