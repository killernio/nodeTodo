let mongoose = require("mongoose");
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

module.exports = { Todo };