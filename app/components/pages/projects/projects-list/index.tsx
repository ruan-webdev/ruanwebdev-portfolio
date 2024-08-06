import Link from "next/link"
import { ProjectCard } from "./project-card"

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-x-4 gap-y-6">
      <Link href="projects/lyfood">
        <ProjectCard />
      </Link>
    </section>
  )
}
