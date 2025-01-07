import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import App from "./_app";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Cart | Home</title>
        <meta name="description" content="Shop the latest products at Product Cart. Enjoy great deals, categories, and exclusive discounts!" />
        <meta name="keywords" content="shopping, ecommerce, deals, Product Cart, products" />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Product Cart | Home" />
        <meta property="og:description" content="Shop the latest products at Product Cart." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://product-cart.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}
