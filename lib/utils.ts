// lib/utils.ts
import { PLATFORMS } from "@/data/platforms";

export const getPlatformLink = (platformName: string): string => {
  const platform = PLATFORMS.find(p => p.name === platformName || p.id === platformName);
  return platform?.affiliateLink || platform?.defaultLink || "#";
};