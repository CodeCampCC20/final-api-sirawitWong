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

router.post("/health-records", authCheckUser, createHealthRecord)
router.get("/health-records", authCheckUser, getAllHealthRecord)
router.get("/health-records/:id", authCheckUser, getRecordById)
router.patch("/health-records/:id", authCheckUser, editRecord)
router.delete("/health-records/:id", authCheckUser, deleteRecord)

export default router
