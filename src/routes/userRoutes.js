import express from "express"
import { getUser, patchUser } from "../controllers/userControllers.js"
import { authCheckUser } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/me", authCheckUser, getUser)
router.patch("/me", authCheckUser, patchUser)

export default router
