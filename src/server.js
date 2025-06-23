import express from "express";
import { error } from "./utils/error.js"
import { notFound } from "./utils/notFound.js"
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js"
import doctorRouter from "./routes/doctorRoutes.js"
import noteRouter from "./routes/doctorNoteRoutes.js"
import healthRouter from "./routes/healthRecordRoutes.js"

const app = express()

app.use(express.json())

app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/doctors", doctorRouter)
app.use("/doctor-notes", noteRouter)
app.use("/health-records", healthRouter)

app.use(error)
app.use(notFound)

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`server running at http://localhost:${PORT}`)
})
