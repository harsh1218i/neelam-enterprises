import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import WebsiteCover from "../components/websiteCover/websiteCover";
import ContactUsForm from "../components/contactUsForm/contactUsForm";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import ScrollToTopButton from "../components/scrollToTopButton/scrollToTopButton";

export default function ContactUsPage() {
    return (
        <>
            <Header />
            <WebsiteCover comingFrom="contact-us" />
            <ContactUsForm />
            <ContactUsBanner />
            <CompanyInfo />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}