import { projects } from 'db/projects'

export default function projectsHandler({ query: { path } }, res) {
  const filtered = projects.filter((p) => p.path === path)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Project with path: ${path} not found.` })
  }
}
