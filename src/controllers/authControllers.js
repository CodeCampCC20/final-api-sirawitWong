import { createError } from "../utils/createError.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import prisma from "../config/prisma.js"

export const authRegisterDoctor = async (req, res, next) => {
	try {
		const { username, password, specialization } = req.body
		const user = await prisma.doctor.findUnique({
			where: { username }
		})
		if (user) {
			createError(400, "username already exist")
		}
		const hash = bcrypt.hashSync(password, 13)
		await prisma.doctor.create({
			data: { username, specialization, password: hash }
		})
		res.status(201).json({ message: "Register doctor Successfully" })
	} catch (err) {
		next(err)
	}
}

export const authRegisterUser = async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await prisma.user.findUnique({
			where: { username }
		})
		if (user) {
			createError(400, "username already exist")
		}
		const hash = bcrypt.hashSync(password, 13)
		await prisma.user.create({
			data: { username, password: hash }
		})
		res.status(201).json({ message: "Register user Successfully" })
	} catch (err) {
		next(err)
	}

}

export const authLoginDoctor = async (req, res, next) => {
	try {
		const { username, password } = req.body
		const doctor = await prisma.doctor.findUnique({
			where: { username }
		})
		if (!username) {
			createError(400, "username or password incorrect")
		}
		const match = bcrypt.compareSync(password, doctor.password)
		if (!match) {
			createError(400, "username or password incorrect")
		}
		const payload = {
			id: doctor.id,
			username: doctor.username,
			specialization: doctor.specialization,
		}
		const token = jwt.sign(payload, process.env.DOCTOR_SECRET, { expiresIn: "6h", algorithm: "HS256" })
		payload.accessToken = token
		res.json(payload)
	} catch (err) {
		next(err)
	}

}

export const authLoginUser = async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await prisma.user.findUnique({
			where: { username }
		})
		if (!username) {
			createError(400, "username or password incorrect")
		}
		const match = bcrypt.compareSync(password, user.password)
		if (!match) {
			createError(400, "username or password incorrect")
		}
		const payload = {
			id: user.id,
			username: user.username,
		}
		const token = jwt.sign(payload, process.env.USER_SECRET, { expiresIn: "6h", algorithm: "HS256" })
		payload.accessToken = token
		res.json(payload)
	} catch (err) {
		next(err)
	}

}
