import type { Metadata } from "next";
import { notoBengali } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ভূমি একক রূপান্তরকারী",
  description: "ভূমি একক রূপান্তরকারী",
  // metadataBase: new URL("https://code.wapborhan.com/land-unit-converter"),
  generator: "Next.js",
  applicationName: "ভূমি একক রূপান্তরকারী",
  referrer: "origin-when-cross-origin",
  keywords: ["ভূমি", "একক", "রূপান্তরকারী"],
  authors: [
    { name: "Borhan Uddin" },
    { name: "Borhan Uddin", url: "https://www.wapborhan.com" },
  ],
  creator: "Borhan Uddin",
  publisher: "SR Dream Lab",
  openGraph: {
    images: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${notoBengali.className} min-h-dvh flex flex-col antialiased`}
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
              &copy; {new Date().getFullYear()} স্বত্তাধিকারী -{" "}
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
