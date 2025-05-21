import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/Header/page";
import Footer from "@/Footer/page";
import ProviderQuery from "./ProviderQuery";
import DeshiProvider from "@/DeshiProvider/DeshiProvider";
import AuthProvider from "@/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Deshi Gajor",
  description: "Real Experiences. True Stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${rajdhani.className}`}>
        <AuthProvider>
          <ProviderQuery>
            <DeshiProvider>
              <Header />
              <div className="mt-[80px] lg:mt-[95px]">{children}</div>
              <Footer />
              <Toaster />
            </DeshiProvider>
          </ProviderQuery>
        </AuthProvider>
      </body>
    </html>
  );
}
