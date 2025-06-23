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

router.post("/doctor-notes", authCheckDoctor, createDoctorNote)
router.get("/doctor-notes/my-notes", authCheckDoctor, getAllDoctorNotes)
router.get("/doctor-notes/user/:userId", authCheckDoctor, getUserNotesById)
router.get("/doctor-notes/recieved", authCheckUser, getUserNotes)
router.patch("/doctor-notes/:id", authCheckDoctor, editNotes)
router.delete("/doctor-notes/:id", authCheckDoctor, deleteNotes)

export default router
