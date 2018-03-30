const { MongoClient, ObjectID } = require("mongodb"); // pull of MongoClient from library

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {    // connect to database (string, callback function)
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");        // access to DB reference (k jake db chceme pristupovat)

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5abea892b514a8c6fb471114")
    // },{ $set: { completed: false } },{returnOriginal:false})
    //     .then((result) => {     // find() vrati vse v kolekci
    //         console.log(result);
    //     }, (err) => {
    //         console.log("Unable to fetch todos", err);
    //     });


    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5abe8ae124bbe11dd05270ba")
}, { $set: { name: "Majkl"}, $inc:{age:1} }, { returnOriginal: false })
        .then((result) => {     // find() vrati vse v kolekci
            console.log(result);
        }, (err) => {
            console.log("Unable to fetch todos", err);
        });

    // client.close()  // close connection with DB server (dissconnect)
});

// deleteMany   - smaze vsechny
// deleteOne    - smaze prvni kterej najde
// findOneAndDelete