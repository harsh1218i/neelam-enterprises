import { useEffect, useState } from 'react';
import "../globals.css";
import '../components/companyInfoFooter/companyInfo.scss';
import '../components/contactUsForm/contactUs.scss';
import '../components/header/header.scss';
import '../components/footer/footer.scss';
import '../components/websiteCover/websiteCover.scss';
import '../components/about/about.scss';
import '../components/introOverlay/introOverlay.scss';
import IntroOverlay from "../components/introOverlay/introOverlay";
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/nprogress-custom.css'; // Custom styles for the progress bar
// import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
// Importing Head from Next.js
import Head from 'next/head';
import ScrollProgressBar from "../components/framerMotions/scrollProgressBar";

NProgress.configure({ showSpinner: false });

const handleRouteChangeStart = () => {
  NProgress.start();
};

const handleRouteChangeComplete = () => {
  NProgress.done();
};

const handleRouteChangeError = () => {
  NProgress.done();
};

export default function App({ Component, pageProps }) {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeError);

    // Show intro only on first visit
    const alreadySeen = localStorage.getItem('introSeen');
    if (!alreadySeen) {
      setShowIntro(true);
    }

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);

  const handleIntroFinish = () => {
    localStorage.setItem('introSeen', 'true');
    setShowIntro(false);
  };

  // const { scrollYProgress } = useScroll();

  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  return (
    <>
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
      <ScrollProgressBar />
      {/* Global head elements including favicon, icon, and apple-touch-icon */}
      <Head>
        <title>Neelam Enterprises</title>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* General icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

        {/* Additional Icons for Web App Manifest */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-16x16.png" />

        {/* Optional: Web App Manifest for PWA support */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/* <AnimatePresence mode='wait'> */}
      {/* Main Component */}
      {showIntro ? (
        <IntroOverlay onContinue={handleIntroFinish} />
      ) : (
        <div id="app-wrapper">
          <Component {...pageProps} />
        </div>
      )}
      {/* </AnimatePresence> */}
    </>
  );
}