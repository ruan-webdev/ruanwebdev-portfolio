import { Button } from "@/app/components/button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/fi"
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            "url('/images/hero-bg.png') no-repeat center/cover, url(https://private-user-images.githubusercontent.com/40373628/353599328-294c0aba-a266-4e47-ac09-47c6c6392941.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMwNjkxMzAsIm5iZiI6MTcyMzA2ODgzMCwicGF0aCI6Ii80MDM3MzYyOC8zNTM1OTkzMjgtMjk0YzBhYmEtYTI2Ni00ZTQ3LWFjMDktNDdjNmM2MzkyOTQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA3VDIyMTM1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE3ZDJiMWUzYmEzMWQyMDkyZWE1NTBmZjZjMmIzODA4YTI4ZGY3MDg5NjQ1YTM2MGIwNGFhYTgxMzU0NGY5OTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9hHcbK6-GtbNBFE_btJrsc3hfBgFrVyewaGinRqYTZg) no-repeat center/cover",
        }}
      />

      <SectionTitle
        title="Lyfood"
        subtitle="projetos"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-center text-gray-400 max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        LyFood é uma hamburgueria com um sistema simples e eficaz para adicionar
        itens ao carrinho e enviar pedidos diretamente para uma API do WhatsApp.
        Desenvolvido exclusivamente com HTML, CSS e JavaScript, este projeto foi
        criado como um estudo de caso e para a aplicação de boas práticas em
        desenvolvimento web.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="HTML" />
        <TechBadge name="CSS" />
        <TechBadge name="JavaScript" />
        <TechBadge name="API" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com/ruan-webdev/Lyfood" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="https://lyfood.vercel.app/" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para Projetos
      </Link>
    </section>
  )
}
