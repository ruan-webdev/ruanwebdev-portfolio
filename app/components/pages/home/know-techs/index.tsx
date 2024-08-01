import { SectionTitle } from "@/app/components/section-title"
import { KnowTech } from "./know-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const KnowTechs = () => {
  return (
    <section className="container py-16 ">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2022-11-01",
            }}
          />
        ))}
      </div>
    </section>
  )
}
