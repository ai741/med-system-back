import { body } from "express-validator"

export const registerValidator = [
    body("email").isEmail(),
    body("password").isLength({min: 3}),
    body("username").isLength({min: 3}),
    body("avatarUrl").optional().isURL(),
];

export const loginValidator = [
    body("email").isEmail(),
    body("password").isLength({min: 3}),
];