export const notFound = (err, req, res, next) => {
	res.status(404).json({ message: "Not Found" })
}
