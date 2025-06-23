import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs"

export const getUser = (req, res, next) => {
	try {
		const user = req.user
		res.json({ id: user.id, username: user.username })
	} catch (err) {
		next(err)
	}
}

export const patchUser = async (req, res, next) => {
	try {
		const header = req.user
		const { username, password } = req.body
		const user = await prisma.user.findUnique({
			where: { id: header.id }
		})
		if (!user) {
			createError(400, "password incorrect")
		}
		const match = bcrypt.compareSync(password, user.password)
		if (!match) {
			createError(400, "password incorrect")
		}
		const newuser = await prisma.user.update({
			where: { id: user.id },
			data: { username: username }
		})
		res.json({ id: newuser.id, username })
	} catch (err) {
		next(err)
	}
}
