"use client"

import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        "flex text-gray-400 items-center gap-2 font-medium font-mono",
        isActive && "text-gray-50"
      )}
    >
      <span className="cursor-pointer text-emerald-400">#</span>
      {label}
    </Link>
  )
}
