import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/art.png"
            width={40}
            height={40}
            alt="Logo da empresa ART"
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://artit.com.br/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors "
          >
            @ ART IT
          </a>
          <h4 className="text-gray-300">Desenvolvedor Junior</h4>
          <span className="text-gray-500">2021 - 2021</span>
          <p className="text-gray-400 text-justify">
            Responsável pela criação de interfaces em Flutter, trabalhando com
            um sistema de micro frontends e um design system fornecido por uma
            empresa parceira. Também realizei a manutenção e elaboração de
            queries com SQL Server, implementei testes assíncronos e
            automatizados, e utilizei Git para controle de versão e colaboração
            em equipe.
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Flutter" />
          <TechBadge name="Dart" />
          <TechBadge name="SQL Server" />
          <TechBadge name="Testes Assíncronos" />
          <TechBadge name="Git" />
          <TechBadge name="Scrum" />
        </div>
      </div>
    </div>
  )
}
