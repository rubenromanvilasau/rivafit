import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  weight: ['300','400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Rivanex",
  description: "Un gimnasio que marca la diferencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + 'min-h-screen flex flex-col justify-between bg-black'}>
        <Navbar/>
        <div className="flex-grow">
          {children}
        </div>
        <Footer/>
        <ToastContainer
          position="bottom-right"
          transition={Bounce}
          autoClose={1000}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          theme="dark"
        />
        </body>
    </html>
  );
}
