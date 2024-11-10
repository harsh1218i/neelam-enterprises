// import Header from "../components/header/header";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import Footer from "../components/footer/footer";
import { lazy, Suspense } from "react";
import ScrollToTopButton from "../components/scrollToTopButton/scrollToTopButton";

const Header = lazy(() => import('../components/header/header'))

export default function Services() {
    return (
        <>
            <Suspense fallback={<p>Loading chalri bhai, rukja thoda.....</p>}>
                <Header />
            </Suspense>
            <div className="min-h-[80vh]">This is Services section</div>
            <ContactUsBanner />
            <CompanyInfo />
            <Footer />
            <ScrollToTopButton />
        </>
    )
}