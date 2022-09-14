import { model, Schema } from "mongoose"

export interface ITask {
  description: string
  from: string
}

const taskSchema = new Schema<ITask>(
  {
    description: { type: String, required: true },
    from: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const Task = model<ITask>("Task", taskSchema)
