import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, includeTime = false): string {
  if (!date) return "";

  const d = new Date(date);

  if (isNaN(d.getTime())) return "";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (includeTime) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  return new Intl.DateTimeFormat("es-ES", options).format(d);
}

export function formatDateForInput(date: Date | string): string {
  if (!date) return "";

  const d = new Date(date);

  if (isNaN(d.getTime())) return "";

  return d.toISOString().split("T")[0];
}
