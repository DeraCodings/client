import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Metadata } from "next";
import Header from "./components/Header";
import { fetchLogo } from "./api/action";
import { baseURL } from "./page";
// import { baseURL } from "./blog/page";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Home Page | Coach Dominguez",
  description: "Home page of Coach Dominguez website",
};

export default async function RootLayout({ children }) {
  const logoData = await fetchLogo();

  const logo = logoData.data.logo;
  const imageUrl = `${baseURL}${logo.url}`;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/football_icon.png" type="image/<generated>" sizes="any" />
      </head>
      <body className={poppins.className}>
        <Header imageUrl={imageUrl} alternativeText={logo.alternativeText} />
        <main className="">{children}</main>
        <Footer imageUrl={imageUrl} alternativeText={logo.alternativeText} />
      </body>
    </html>
  );
}
