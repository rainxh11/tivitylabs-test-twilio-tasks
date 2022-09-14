import express from "express"
import twilio from "twilio"
import { Task } from "./task.model"

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

const router = express.Router()

router.route("/test").post(async (req, res) => {
  console.log(req.body)
  const response = await twilioClient.messages.create({ ...req.body })
  res.status(200).json(response)
})

router
  .use(twilio.webhook())
  .route("/task-webhook")
  .post(async (req, res) => {
    console.log("Webhook Request", req.body)

    console.log(`Received new task from: ${req.body.from}, ${req.body.body}`)
    console.log("Saving to database...")
    const task = new Task({
      description: req.body.body,
      form: req.body.from,
    })
    await task.save()

    twilioClient.messages.create({
      from: req.body.to,
      to: req.body.from,
      body: `Task saved to database ${JSON.stringify(task)}`,
    })
    res.status(201)
  })

export default router
