import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import QueryProvider from "@/components/QueryProvider";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
        <link rel="icon" href="/Favicon140.ico" sizes="any" />
        <link rel="icon" href="/Favicon140.png" type="image/png" />
        <link rel="icon" href="/Favicon140.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${manrope.className} flex flex-col bg-noise bg-noise relative antialiased bg-[#000000] bg-repeat text-white`}
        style={{ backgroundImage: "url('/bg/bg-fin.png')" }}
      >
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
