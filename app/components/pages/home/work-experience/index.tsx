import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiências Profissional"
        />
        <p className="text-gray-400 mt-6 text-justify">
          Sou um desenvolvedor fascinado por aprender novas tecnologias e
          enfrentar novos desafios que me permitam crescer profissionalmente e
          conquistar meus objetivos. Estou sempre aberto a novas oportunidades e
          troca de experiências.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  )
}
