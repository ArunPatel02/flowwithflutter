import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FAQ from "../sections/FAQ";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Pricing from "../sections/Pricing";
import Workflow from "../sections/Workflow";
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StreakCode</title>
        <meta name="title" content="Streakcode"></meta>
        <meta name="description" content="We are a team of experienced and talented software developers who offer a wide range of services to businesses of all sizes. We specialize in developing custom software solutions that meet the specific needs of our clients. We specially use Nocode tools for minimizing the time."></meta>
        <meta name="keywords" content="streakcode , streak code , streakcodes , software freelancing, software freelancer, hire a software freelancer, freelance software development, freelance software engineer, freelance web developer, freelance mobile app developer, Flutter, FlutterFlow, cross-platform app development, mobile app development, desktop app development, web app development, Flutter widgets, Flutter state management, Flutter animations, Flutter performance, Flutter UI, FlutterFlow no-code app development, FlutterFlow visual app builder, FlutterFlow drag-and-drop app builder, FlutterFlow Firebase integration, FlutterFlow API integration"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="StreakCode"></meta>
        <meta property="og:description" content="We are a team of experienced and talented software developers who offer a wide range of services to businesses of all sizes. We specialize in developing custom software solutions that meet the specific needs of our clients.We specially use Nocode tools for minimizing the time."></meta>
        <meta property="og:image" content="https://streakcodes.com/thumbnail_256.png"></meta>
        <meta property="og:url" content="https://streakcodes.com"></meta>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:300,300italic,400,400italic,700,700italic,900,900italic%7CMontserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7COpen+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic%7CVarela:400%7CPT+Serif:400,400italic,700,700italic%7CVarela+Round:400%7CManrope:regular,500,600,700&display=optional" media="all" />
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></Script>
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
