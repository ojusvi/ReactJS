import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const name =
  localStorage.getItem("email") === "admin@gmail.com"
    ? "Admin"
    : localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "User";
export const email = localStorage.getItem("email")
  ? localStorage.getItem("email")
  : null;
