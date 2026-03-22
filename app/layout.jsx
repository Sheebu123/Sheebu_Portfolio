import "./globals.css";
import DynamicBackground from "@/components/DynamicBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Sheebu's Portfolio | Full Stack Developer",
  description:
    "Developer portfolio of Sheebu Tiwari, a Computer Science Engineering student building modern web applications with Next.js and Django.",
  keywords: [
    "Sheebu Tiwari",
    "Full Stack Developer",
    "Next.js Portfolio",
    "Django Developer",
    "Computer Science Engineering Student",
  ],
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <DynamicBackground />
        <div className="relative z-10">
          <Navbar />
          <PageShell>{children}</PageShell>
          <Footer />
        </div>
      </body>
    </html>
  );
}
