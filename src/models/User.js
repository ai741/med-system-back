import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, required: true},
    telephone: {type: String, required: true},
    birthday: {type: Date, required: true},
    password: {type: String, required: true},
    roles: {type: String, ref: "Role"},
})

export default model("User", UserSchema)