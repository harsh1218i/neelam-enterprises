import AboutUs from "../components/about/about";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import Footer from "../components/footer/footer";
import Gallery from "../components/gallery/gallery";
import Header from "../components/header/header";
import Services from "../components/services/services";
import WebsiteCover from "../components/websiteCover/websiteCover";

export default function Home() {
  return (
    <>
      <Header/>
      <WebsiteCover comingFrom="home" />
      <AboutUs/>
      <Services/>
      <Gallery/>
      <ContactUsBanner/>
      <CompanyInfo/>
      <Footer/>
    </>
  );
}
