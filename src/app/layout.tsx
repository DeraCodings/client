import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Metadata } from "next";
import Header from "./components/Header";
import { baseURL } from "./blog/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coach Dominguez-home page",
  description: "Home page of Coach Dominguez website",
};

export async function fetchLogo() {
  const path = `/api/logo`;

  const url = new URL(path, baseURL);

  url.searchParams.append("populate", "logo");

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) throw new Error("Failed to fetch image");

  const data = res.json();

  return data;
}

export default async function RootLayout({ children }) {
  const logoData = await fetchLogo();
  
  const logo = logoData.data.logo;
  const imageUrl = `${baseURL}${logo.url}`;

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
