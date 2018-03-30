const { MongoClient, ObjectID } = require("mongodb"); // pull of MongoClient from library

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {    // connect to database (string, callback function)
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("Users");        // access to DB reference (k jake db chceme pristupovat)

    // db.collection("Todos").deleteMany({ text: "Eat luch" }).then((result) => {     // find() vrati vse v kolekci
    //    console.log(result);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection("Todos").deleteOne({ eat: "Eat lunch" }).then((result) => {     // find() vrati vse v kolekci
    //     console.log(result);
    //  }, (err) => {
    //      console.log("Unable to fetch todos", err);
    //  });
 
    // db.collection("Todos").findOneAndDelete({ completed: false }).then((result) => {     // find() vrati vse v kolekci
    //     console.log(result);
    //  }, (err) => {
    //      console.log("Unable to fetch todos", err);
    //  });

    db.collection("Users").deleteMany({ name: "Majkl" }).then((result) => {     // find() vrati vse v kolekci
        console.log(result);
     }, (err) => {
         console.log("Unable to fetch todos", err);
     });

     db.collection("Users").findOneAndDelete({_id: new ObjectID("5abe8b1bf951942b7cc3e8c5")}).then((result) => {     // find() vrati vse v kolekci
        console.log(result);
     }, (err) => {
         console.log("Unable to fetch todos", err);
     });




    // client.close()  // close connection with DB server (dissconnect)
});

// deleteMany   - smaze vsechny
// deleteOne    - smaze prvni kterej najde
// findOneAndDelete