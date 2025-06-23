import express from "express"
import {
	createHealthRecord,
	getAllHealthRecord,
	getRecordById,
	editRecord,
	deleteRecord
} from "../controllers/healthRecordControllers.js"
import { authCheckUser } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/", authCheckUser, createHealthRecord)
router.get("/", authCheckUser, getAllHealthRecord)
router.get("/:id", authCheckUser, getRecordById)
router.patch("/:id", authCheckUser, editRecord)
router.delete("/:id", authCheckUser, deleteRecord)

export default router
