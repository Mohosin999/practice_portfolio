import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoToTopButton from "@/components/ui/GoToTopButton";

export const metadata = {
  title: "Mohosin | Frontend Developer",
  description: `Portfolio of a Frontend and Full-Stack Developer specializing in React, JavaScript, and modern web applications. Showcasing projects, skills, and experience in building interactive and responsive web solutions.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#F8F6FD] dark:bg-[#181A1B] text-gray-800 dark:text-gray-100 selection:bg-sky-300 dark:selection:text-gray-900`}
      >
        <Header />
        {children}
        <Footer />

        <GoToTopButton />
      </body>
    </html>
  );
}
