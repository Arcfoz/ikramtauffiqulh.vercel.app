import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sen = Sen({ subsets: ["latin"] });

const options = {
  title: "Ikram Tauffiqul H",
  description:
    "Ikram Tauffiqul Hakim is a App Developer, Visual Designer, and Machine Learning Developer, passionate about crafting user-friendly digital experiences. I'm currently delving into the exciting fields of machine learning and data analytics.",
  url: "https://ikramth.vercel.app/",
  ogImage:
    "https://res.cloudinary.com/dtshpujvo/image/upload/v1710232874/ikramth.jpg",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "ikramth.vercel.app",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": "HPO1osDjE2JpSwHA14rPVhIlbWtQelBIkeTGcTShylg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sen.className} bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
