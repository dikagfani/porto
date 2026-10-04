import {Space_Grotesk, Inter, JetBrains_Mono} from "next/font/google"
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains_mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Muhammad Ardika Ghathfani | Web Developer",
  description: " Information Systems student at Jambi University with a strong passion for website development and UI/UX design",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
