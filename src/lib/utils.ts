
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getGrowthIndicator(value: number) {
  if (value > 0) {
    return { color: "text-green-600", icon: "trending-up" as const };
  } else if (value < 0) {
    return { color: "text-red-600", icon: "trending-down" as const };
  } else {
    return { color: "text-gray-500", icon: "minus" as const };
  }
}
