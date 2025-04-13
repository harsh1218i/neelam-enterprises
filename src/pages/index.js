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
import AnimatedHeading from "../components/animatedHeading/animatedHeading";
import SectionDivider from "../components/sectionDivider/sectionDivider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neelam Enterprises: Government Registered Contractor | PWD, CPWD, Indian Railways and MES Tender Services</title>
        <meta name="description" content="Neelam Enterprises, a government-registered contractor, specializes in executing government tenders across various departments, with a primary focus on Madhya Pradesh. Our expertise spans PWD, CPWD, and other state government departments, ensuring quality and timely delivery. We also undertake projects for Indian Railways, MES, and other prestigious institutions, providing reliable and professional contracting services. Partner with us for excellence in every project." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <WebsiteCover comingFrom="home" />
        <AboutUs />
        <SectionDivider/>
        <Services />
        <SectionDivider/>
        <Gallery />
        <SectionDivider/>
        <AnimatedHeading />
        <ContactUsBanner />
        <CompanyInfo />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}
