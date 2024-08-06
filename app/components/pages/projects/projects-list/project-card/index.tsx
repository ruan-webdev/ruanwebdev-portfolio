import Image from "next/image"

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="/images/project-pic.png"
          width={380}
          height={200}
          unoptimized
          alt="Thumbnail do projeto Lyfood"
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Lyfood
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          LyFood é uma hamburgueria com um sistema simples e eficaz para
          adicionar itens ao carrinho e enviar pedidos diretamente para uma API
          do WhatsApp.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          HTML, CSS, JavaScript
        </span>
      </div>
    </div>
  )
}
