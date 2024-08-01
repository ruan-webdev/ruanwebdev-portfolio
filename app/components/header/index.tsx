import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
]

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex-items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo-alt.png"
            alt="Logo Ruan Dev"
            width={78}
            height={49}
            className="cursor-pointer ml-[-10px]"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>
      </div>
    </header>
  )
}
