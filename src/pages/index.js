import Head from "next/head";
import AboutUs from "../components/about/about";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import Footer from "../components/footer/footer";
import Gallery from "../components/gallery/gallery";
import Header from "../components/header/header";
import Services from "../components/servicess/services";
import WebsiteCover from "../components/websiteCover/websiteCover";
import ScrollToTopButton from "../components/scrollToTopButton/scrollToTopButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Government Registered Contractor | PWD Tender Services</title>
        <meta name="description" content="Neelam Enterprises, a government-registered contractor, specializes in handling government tenders for PWD, CPWD, Indian Railways, and MES projects. Partner with us for reliable and professional contracting services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <WebsiteCover comingFrom="home" />
        <AboutUs />
        <Services />
        <Gallery />
        <ContactUsBanner />
        <CompanyInfo />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}
