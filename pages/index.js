import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Pricing from "./sections/Pricing";
import Workflow from "./sections/Workflow";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FlowWithFlutter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:300,300italic,400,400italic,700,700italic,900,900italic%7CMontserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7COpen+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic%7CVarela:400%7CPT+Serif:400,400italic,700,700italic%7CVarela+Round:400%7CManrope:regular,500,600,700" media="all" />
        {/* <script type="text/javascript">
          {WebFont.load({ google: { families: ["Merriweather:300,300italic,400,400italic,700,700italic,900,900italic", "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic", "Varela:400", "PT Serif:400,400italic,700,700italic", "Varela Round:400", "Manrope:regular,500,600,700"] } })}
        </script> */}
      </Head>
      <Header />
      <Hero />
      <Workflow />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
