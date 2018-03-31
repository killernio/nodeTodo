let mongoose = require("mongoose");

// USER model do collekce user (automaticky to prepisuje na lowerCase)
let User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = { User };