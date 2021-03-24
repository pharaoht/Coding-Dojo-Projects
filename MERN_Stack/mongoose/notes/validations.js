const { Mongoose } = require("mongoose");

const UserSchema = new Mongoose.UserSchema(
    {
        first_name:{
            type: String,
            require: [true, "First name is required"],
            minlength: [6, "First name must be at least 6 characters long"]
        },
        last_name:{
            type:String,
            required: [true, "Last name is required"],
            minlength: [6, "Last name must be at least 6 characte"]
        },
        age:{
            type: Number,
            min:[],
            max:[]
        },
        email:{
            type: String,
            required:[true, "Emali is required"]
        }
    }
)