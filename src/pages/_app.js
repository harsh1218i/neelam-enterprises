import "../globals.css";
import '../components/companyInfoFooter/companyInfo.scss'
import '../components/contactUsForm/contactUs.scss'
import '../components/header/header.scss'
import '../components/footer/footer.scss'
import '../components/websiteCover/websiteCover.scss'
import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/nprogress-custom.css'; // Custom styles for the progress bar

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
  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);
  return <Component {...pageProps} />;
}
