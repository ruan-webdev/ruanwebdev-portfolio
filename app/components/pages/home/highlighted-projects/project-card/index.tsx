import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420} // talvez aumentar para 420
          height={304}
          src="/images/project-pic.png"
          alt="Thumbnail do projeto Lyfood"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          Lyfood
        </h3>

        <p className="my-6 text-gray-400 text-justify">
          LyFood é uma hamburgueria com um sistema simples e eficaz para
          adicionar itens ao carrinho e enviar pedidos diretamente para uma API
          do WhatsApp. Desenvolvido exclusivamente com HTML, CSS e JavaScript,
          este projeto foi criado como um estudo de caso e para a aplicação de
          boas práticas em desenvolvimento web.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="HTML" />
          <TechBadge name="CSS" />
          <TechBadge name="JavaScript" />
          <TechBadge name="API" />
        </div>

        <Link href="/projects/lyfood">
          Ver projeto <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
