import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lexend_Deca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-Deca",
});

export const metadata = {
  title: "SkyX Solar - OKHUB Việt Nam",
  description: "okhub.vn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon-1.svg" />

      </head>
      <body className={`${inter.className} ${lexend_Deca.variable}`}>{children}</body>
    </html>
  );
}
