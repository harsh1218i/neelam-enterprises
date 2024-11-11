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
            <div className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
                <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                    <div className="h-screen">
                        This is services Section
                    </div>
                </div>
            </div>
            <ContactUsBanner />
            <CompanyInfo />
            <Footer />
            <ScrollToTopButton />
        </>
    )
}