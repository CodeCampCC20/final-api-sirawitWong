import jwt from "jsonwebtoken"
import { createError } from "../utils/createError.js";

export const authCheckUser = (req, res, next) => {
	try {
		const header = req.headers.authorization;
		if (!header) {
			createError(401, "unauthorize")
		}
		const token = header.split(" ")[1]
		jwt.verify(token, process.env.USER_SECRET, (error, decode) => {
			if (error) {
				createError(401, "unauthorize")
			}
			req.user = decode
			next()
		})
	} catch (err) {
		next(err)
	}
};


export const authCheckDoctor = (req, res, next) => {
	try {
		const header = req.headers.authorization;
		if (!header) {
			createError(401, "unauthorize")
		}
		const token = header.split(" ")[1]
		jwt.verify(token, process.env.DOCTOR_SECRET, (error, decode) => {
			if (error) {
				createError(401, "unauthorize")
			}
			req.user = decode
			next()
		})
	} catch (err) {
		next(err)
	}
};
