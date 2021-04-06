const {Schema, model} = require("mongoose");

const ngoSchema = new Schema({
    name: {
      type: String,
      require: [true, "Please provide the Ngo's name"]  
    },
    program: {
        type: String,
        required: [true, "Please provide the type of program"]
    },
    activity: {
        type: String,
        required: [true, "Please provide activity"]
    },
    overview: {
        type: String,
        required: [true, "Please provide an overview"]
    },  
        timestamps: true,
    }
);

module.export=model('Ngo', ngoSchema);