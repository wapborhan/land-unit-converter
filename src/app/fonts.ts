// src/app/fonts.ts
import { Noto_Sans_Bengali } from "next/font/google";

export const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});
