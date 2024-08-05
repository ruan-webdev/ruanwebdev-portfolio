"use client"

import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoMdDownload } from "react-icons/io"

type NavItemProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  const isDownloadLink = label.toLowerCase().includes("download")

  if (isDownloadLink) {
    return (
      <a
        href={href}
        download
        className={cn(
          "flex text-gray-400 items-center gap-2 font-medium font-mono hover:text-green-500",
          isActive && "text-gray-50"
        )}
      >
        <IoMdDownload size={16} className="text-emerald-500" />
        {label}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex text-gray-400 items-center gap-2 font-medium font-mono hover:text-green-500",
        isActive && "text-gray-50"
      )}
    >
      <span className="cursor-pointer text-emerald-400">#</span>
      {label}
    </Link>
  )
}
