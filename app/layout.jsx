import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";
import SessionWrapper from "./api/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MySearch App",
  description: "MY first next js application called MySearch",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <SessionWrapper>
        <body className={poppins.className}>
          <Header />
          {children}
        </body>
      </SessionWrapper>
    </html>
  );
}
