import { createError } from "../utils/createError.js";

export const createDoctorNote = (req, res, next) => {
	try {
		res.json({ message: "createNote" })
	} catch (err) {
		next(err)
	}
}

export const getAllDoctorNotes = (req, res, next) => {
	try {
		res.json({ message: "getallnote" })
	} catch (err) {
		next(err)
	}
}

export const getUserNotesById = (req, res, next) => {
	try {
		res.json({ message: "getbyid" })
	} catch (err) {
		next(err)
	}
}
export const getUserNotes = (req, res, next) => {
	try {
		res.json({ message: "getuser" })
	} catch (err) {
		next(err)
	}
}
export const editNotes = (req, res, next) => {
	try {
		res.json({ message: "edit" })
	} catch (err) {
		next(err)
	}
}
export const deleteNotes = (req, res, next) => {
	try {
		res.json({ message: "delete" })
	} catch (err) {
		next(err)
	}
}
