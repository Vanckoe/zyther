import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"], // Оставь только нужные
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Zypher",
  description: "Video editor",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/Favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${manrope.className} flex flex-col bg-noise bg-noise relative antialiased bg-[#000000] bg-repeat text-white`}
        style={{ backgroundImage: "url('/bg/bg-fin.png')" }}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
