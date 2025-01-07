import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import styles from "./app.module.css";
// import type { AppProps } from "next/app";

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
    </div>
  );
}
