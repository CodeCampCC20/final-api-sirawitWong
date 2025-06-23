import { createError } from "../utils/createError.js";

export const createHealthRecord = (req, res, next) => {
	try {
		res.json({ message: "createreco" })
	} catch (err) {
		next(err)
	}
}

export const getAllHealthRecord = (req, res, next) => {
	try {
		res.json({ message: "getallrec" })
	} catch (err) {
		next(err)
	}
}

export const getRecordById = (req, res, next) => {
	try {
		res.json({ message: "getRecbyid" })
	} catch (err) {
		next(err)
	}
}

export const editRecord = (req, res, next) => {
	try {
		res.json({ message: "edit" })
	} catch (err) {
		next(err)
	}
}

export const deleteRecord = (req, res, next) => {
	try {
		res.json({ message: "delete" })
	} catch (err) {
		next(err)
	}
}
