import type { Metadata } from "next";
import "./globals.css";
import montserrat from "./fonts";
import ReduxProvider from "@/redux/provider";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} subpixel-antialiased bg-bg-primary`}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
