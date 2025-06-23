import express from "express"
import { getDoctor, patchDoctor } from "../controllers/doctorControllers.js"
import { authCheckDoctor } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/me", authCheckDoctor, getDoctor)
router.patch("/me", authCheckDoctor, patchDoctor)

export default router
