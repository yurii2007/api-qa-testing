import type { Metadata } from "next";
import "./globals.css";
import montserrat from "./fonts";
import { ToastContainer } from "react-toastify";

import ReduxProvider from "@/redux/provider";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Tests for QA",
  description: "theory and tech questions for QA engineers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} subpixel-antialiased bg-bg-primary flex flex-col justify-between min-h-screen`}
      >
        <ReduxProvider>
          <Header />
          {children}
          <ToastContainer position="top-right" autoClose={3000} draggable={false} />
        </ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
