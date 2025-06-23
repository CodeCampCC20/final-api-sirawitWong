import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs"

export const getDoctor = (req, res, next) => {
	try {
		const user = req.user
		res.json({ id: user.id, username: user.username, specialization: user.specialization })
	} catch (err) {
		next(err)
	}
}

export const patchDoctor = async (req, res, next) => {
	try {
		const header = req.user
		const { username, password, specialization } = req.body
		const user = await prisma.doctor.findUnique({
			where: { id: header.id }
		})
		if (!user) {
			createError(400, "password incorrect")
		}
		const match = bcrypt.compareSync(password, user.password)
		if (!match) {
			createError(400, "password incorrect")
		}
		const newuser = await prisma.doctor.update({
			where: { id: user.id },
			data: { username: username, specialization: specialization }
		})
		res.json({ id: newuser.id, username, specialization: specialization })
	} catch (err) {
		next(err)
	}
}
