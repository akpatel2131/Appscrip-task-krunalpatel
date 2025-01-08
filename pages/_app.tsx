import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";
import "@/styles/globals.css";
import styles from "./app.module.css";
import Divider from "../wrappers/Divider";
// import type { AppProps } from "next/app";

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Divider />
      <div className={styles.container}>
        <div className={styles.discriptionContainer}>
          <div className={styles.discriptionHeader}>Discover our products</div>
          <div className={styles.discriptionSubtitle}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </div>
        </div>
        <Divider />
        <Product />
      </div>
      <Footer />
    </div>
  );
}
