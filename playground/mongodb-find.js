const { MongoClient, ObjectID } = require("mongodb"); // pull of MongoClient from library

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {    // connect to database (string, callback function)
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("Users");        // access to DB reference (k jake db chceme pristupovat)

    // db.collection("Todos").find({completed:false}).toArray().then((docs) => {
    // db.collection("Todos").find({       // vyhledavaji delame v objektu
    //     _id: new ObjectID("5abe97cbb514a8c6fb470620")}      // ID nejde brat jako string musime vytvorit novy object
    // ).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });


    // db.collection("Todos").find().count().then((count) => {     // find() vrati vse v kolekci
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection("Users").find({name:"Majkl"}).toArray().then((docs) => {     // find() vrati vse v kolekci
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });


    // client.close()  // close connection with DB server (dissconnect)
});