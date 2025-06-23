import express from "express"
import {
	createDoctorNote,
	getAllDoctorNotes,
	getUserNotesById,
	getUserNotes,
	editNotes,
	deleteNotes
} from "../controllers/doctorNoteControllers.js"
import { authCheckDoctor, authCheckUser } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/", authCheckDoctor, createDoctorNote)
router.get("/my-notes", authCheckDoctor, getAllDoctorNotes)
router.get("/user/:userId", authCheckDoctor, getUserNotesById)
router.get("/recieved", authCheckUser, getUserNotes)
router.patch("/:id", authCheckDoctor, editNotes)
router.delete("/:id", authCheckDoctor, deleteNotes)

export default router
