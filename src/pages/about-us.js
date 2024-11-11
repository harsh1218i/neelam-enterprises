import Header from "../components/header/header";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import Footer from "../components/footer/footer";
import ScrollToTopButton from "../components/scrollToTopButton/scrollToTopButton";

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
                <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                    <div className="h-screen">
                        This is About us Section
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