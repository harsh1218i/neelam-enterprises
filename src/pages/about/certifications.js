import Header from "../../components/header/header";
import ContactUsBanner from "../../components/contactUsForm/contactUsBanner";
import CompanyInfo from "../../components/companyInfoFooter/companyInfo";
import Footer from "../../components/footer/footer";
import ScrollToTopButton from "../../components/scrollToTopButton/scrollToTopButton";
import Certifications from "../../components/about/certifications";

export default function AboutMe() {
    return (
        <>
            <Header />
            <Certifications />
            <ContactUsBanner />
            <CompanyInfo />
            <Footer />
            <ScrollToTopButton />
        </>
    )
}