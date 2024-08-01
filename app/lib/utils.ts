import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// tailwind-merge is a library that helps you merge tw classes, useful to agroup classes
// clsx help to add classes dinamically
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
