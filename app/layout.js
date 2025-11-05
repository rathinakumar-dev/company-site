import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", 
  weight: ["400", "500", "600", "700"],
  preload: true, 
});

export const metadata = {
  title: "Goldmine Info Tech",
  description: "Professional Digital & IT Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">   
      <body
        className={`${inter.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
