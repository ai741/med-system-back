import { Schema, Model } from "mongoose"

const Role = new Schema({
    value: {type: String, unique: true, default: "USER"},
    name: {type: String, unique: true, default: "Пользователь"},
})

export default Model("Role", RoleSchema)