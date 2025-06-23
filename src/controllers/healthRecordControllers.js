import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const createHealthRecord = async (req, res, next) => {
	try {
		const user = req.user
		const { type, value } = req.body
		const newRecord = await prisma.HealthRecord.create({
			data: {
				userId: user.id,
				type: type,
				value: value
			}
		})
		res.json({ message: "create health record successfully" })
	} catch (err) {
		next(err)
	}
}

export const getAllHealthRecord = async (req, res, next) => {
	try {
		const user = req.user
		const records = await prisma.HealthRecord.findMany({
			where: { userId: user.id }
		})
		res.json(records)
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
