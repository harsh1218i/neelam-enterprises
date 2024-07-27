import Header from "../components/header/header";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import Footer from "../components/footer/footer";

export default function Services() {
    return (
        <>
            <Header></Header>
            <div className="min-h-[80vh]">This is Services section</div>
            <ContactUsBanner />
            <CompanyInfo />
            <Footer />
        </>
    )
}