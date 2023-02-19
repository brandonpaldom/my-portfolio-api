import { resume } from 'db/resume'

export default function handler(req, res) {
  res.status(200).json(resume)
}
