import express from "express"
import { authRegisterDoctor, authRegisterUser, authLoginDoctor, authLoginUser } from "../controllers/authControllers.js"
import { doctorRegisterSchema, loginSchema, validate, userSchema } from "../middleware/validator.js"

const router = express.Router()

router.post("/register/doctor", validate(doctorRegisterSchema), authRegisterDoctor)
router.post("/register/user", validate(userSchema), authRegisterUser)
router.post("/login/doctor", validate(loginSchema), authLoginDoctor)
router.post("/login/user", validate(loginSchema), authLoginUser)

export default router
