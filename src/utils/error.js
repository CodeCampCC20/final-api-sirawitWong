export const error = (err, req, res, next) => {
	res.status(err.code || 500).json({ message: err.message || "Someting Wrong" })
}
