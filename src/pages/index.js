import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import WebsiteCover from "../components/websiteCover/websiteCover";

export default function Home() {
  return (
    <>
      <Header></Header>
      <WebsiteCover comingFrom="home"></WebsiteCover>
      <ContactUsBanner></ContactUsBanner>
      <CompanyInfo></CompanyInfo>
      <Footer></Footer>
    </>
  );
}
