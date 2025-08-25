import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/header";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mohosin | Frontend Developer",
  description: `Portfolio of a Frontend and Full-Stack Developer specializing in React, JavaScript, and modern web applications. Showcasing projects, skills, and experience in building interactive and responsive web solutions.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${PlusJakartaSans.className} antialiased bg-secondarycolor text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
