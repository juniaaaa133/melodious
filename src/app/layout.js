import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import '../css/index.css';

const inter = Inter({ subsets: ["latin"] });

 export const metadata = {
  title: "Melodious",
  description: "Melodious|ICONIC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {<Nav />}
{children}
      </body>
    </html>
  );
}
