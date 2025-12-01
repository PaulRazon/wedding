import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Dancing_Script, Cinzel, Great_Vibes, Habibi, Pinyon_Script } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

// Cinzel is similar to Koch Antiqua - elegant serif with classical feel
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Great Vibes - Elegant script font for titles
const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Pinyon Script - Elegant script font for titles
const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Habibi - Elegant serif font for normal text
const habibi = Habibi({
  variable: "--font-habibi",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anahí & Eduardo - Nuestra Boda",
  description: "Te invitamos a celebrar nuestro amor. 11 de Abril, 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${dancingScript.variable} ${cinzel.variable} ${greatVibes.variable} ${pinyonScript.variable} ${habibi.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
