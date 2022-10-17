import { Router } from "express"
import * as UserController from "../controllers/UsersController.js"
import checkAuth from "../middleware/checkAuth.js"


const router = new Router()

router.get("/getAll", checkAuth, UserController.getAll)
router.get("/getOne/:id", checkAuth, UserController.getOne)

router.post("/createUser", UserController.Сreate)
router.delete("/removeUser/:id", UserController.Remove)
router.patch("/updateUser/:id", UserController.Update)


export default router
