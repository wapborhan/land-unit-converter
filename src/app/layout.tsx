import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

export const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ভূমি একক রূপান্তরকারী",
  description: "ভূমি একক রূপান্তরকারী",
};
const customStyle = {
  backgroundImage: `url("/bg.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "top",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoBengali.className} min-h-dvh flex flex-col antialiased`}
        style={customStyle}
      >
        <header className="flex items-center justify-center bg-transparent lg:py-10 md:py-8 py-8">
          <h1 className="text-lg leading-none md:text-xl lg:text-2xl font-bold text-gray-800">
            ভূমি একক রূপান্তরকারী
          </h1>
        </header>
        {children}
        <footer className="bg-white/10 backdrop-blur-xs  text-center p-4 mt-auto">
          <section>
            <p className="text-black text-lg" style={{ wordSpacing: "0.1em" }}>
              &copy; {toBengaliNumber(new Date().getFullYear())} স্বত্তাধিকারী -{" "}
              <a
                href="https://www.wapborhan.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                মোঃ বোরহান উদ্দিন
              </a>
            </p>
          </section>
        </footer>
      </body>
    </html>
  );
}
const toBengaliNumber = (num: number): string => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((digit) => bengaliDigits[+digit])
    .join("");
};
