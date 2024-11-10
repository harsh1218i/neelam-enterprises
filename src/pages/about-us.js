import Header from "../components/header/header";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import Footer from "../components/footer/footer";
import ScrollToTopButton from "../components/scrollToTopButton/scrollToTopButton";

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="min-h-[80vh]">This is About Us section</div>
            <ContactUsBanner />
            <CompanyInfo />
            <Footer />
            <ScrollToTopButton />
        </>
    )
}