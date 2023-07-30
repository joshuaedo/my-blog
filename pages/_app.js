import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
 useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  }, [])

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
