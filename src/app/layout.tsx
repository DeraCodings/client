import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Metadata } from "next";
import Header from "./components/Header";
import { fetchLogo } from "./api/action";
// import { baseURL } from "./blog/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coach Dominguez-home page",
  description: "Home page of Coach Dominguez website",
};

export default async function RootLayout({ children }) {
  const logoData = await fetchLogo();
  
  const logo = logoData.data.logo;
  const imageUrl = `${process.env.NEXT_BASE_URL}${logo.url}`;

  console.log(imageUrl);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header imageUrl={imageUrl} alternativeText={logo.alternativeText} />
        <main className="">{children}</main>
        <Footer imageUrl={imageUrl} alternativeText={logo.alternativeText} />
      </body>
    </html>
  );
}
