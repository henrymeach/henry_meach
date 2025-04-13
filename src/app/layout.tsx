import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | henrymeach.com",
    default: 'henrymeach.com',
  },
  description: "The online portfolio/website for Henry Meach.",
  metadataBase: new URL('https://henrymeach.com')
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="min-h-screen">
          <Navbar className="edge" />
          {children}
          <Footer id="contact" />
        </div>
      </body>
    </html>
  );
}
