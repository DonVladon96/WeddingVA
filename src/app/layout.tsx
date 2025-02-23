import type { Metadata } from "next";
import { Dancing_Script, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script'
})
const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab'
})

export const metadata: Metadata = {
  title: "Свадьба Владислава & Анастасии",
  description: "Свадьба Владислава & Анастасии, 5 апреля 2025",
  icons: {
    icon: "/ring.svg"
  },
  openGraph: {
    images: "",
    type: "website",
    locale: "ID-id",
    siteName: "",
    title: "Wedding of Vladislav & Anastasia",
    description: "The wedding of Vladislav & Anastasia at April, 05 2025",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ring.svg" sizes="any" />
      </head>
      <body
        className={`${dancing_script.variable} ${roboto_slab.variable}`}>
        {children}
        <Toaster duration={2000}/>
      </body>
    </html>
  );
}
