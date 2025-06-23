import { object, ref, string } from "yup"

export const doctorRegisterSchema = object({
	username: string().min(3, "user name must be at least 3 char").required("username required"),
	password: string().min(6, "password length must be at least 6 char").required("password required"),
	confirmPassword: string().oneOf([ref("password"), null]),
	specialization: string().required("specialization required")
})


export const userSchema = object({
	username: string().min(3, "user name must be at least 3 char").required("username required"),
	password: string().min(6, "password length must be at least 6 char").required("password required"),
	confirmPassword: string().oneOf([ref("password"), null]),
})

export const loginSchema = object({
	username: string().min(3, "user name must be at least 3 char").required("username required"),
	password: string().min(6, "password length must be at least 6 char").required("password required"),
})


export const validate = (schema) => async (req, res, next) => {
	try {
		await schema.validate(req.body, { abortEarly: false })
		next()
	} catch (err) {
		const errMsg = err.errors.map((item) => item);
		const errText = errMsg.join(", ")
		const mergeErr = new Error(errText)
		next(mergeErr)
	}
}

