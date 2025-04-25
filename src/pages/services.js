import { lazy, Suspense } from "react";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import Footer from "../components/footer/footer";
import ScrollToTopButton from "../components/scrollToTopButton/scrollToTopButton";
const Header = lazy(() => import("../components/header/header"));
import dynamic from "next/dynamic";
// import PDFViewer from "../components/about/pdfViewer";
const PDFViewer = dynamic(() => import("./../components/about/pdfViewer"), {
    ssr: false, // 🔥 disables SSR for this component
});

const servicesData = [
    // Government Projects
    {
        image: "📑",
        heading: "Government Tender Execution",
        description: "End-to-end execution of government tenders including documentation, site setup, contractor coordination, and quality control.",
        category: "Government Projects",
    },
    {
        image: "🏗️",
        heading: "Public Infrastructure Development",
        description: "Construction of school buildings, public toilets, and other public utilities under approved norms.",
        category: "Government Projects",
    },
    {
        image: "🏢",
        heading: "Renovation & Maintenance of Govt Quarters",
        description: "Civil, plumbing, electrical, and painting work in government quarters with long-term durability.",
        category: "Government Projects",
    },
    {
        image: "🪖",
        heading: "Military & Cantonment Area Projects",
        description: "MES and defense area projects executed under strict military protocol and standards.",
        category: "Government Projects",
    },
    {
        image: "🚰",
        heading: "RO & Water Cooler Installation",
        description: "Installation of water purifiers and coolers in public places with maintenance options.",
        category: "Government Projects",
    },

    // Private & Support Services
    {
        image: "🎨",
        heading: "Interior Designing & Architecture",
        description: "Interior and architectural design for offices and public buildings blending aesthetics and functionality.",
        category: "Private & Support Services",
    },
    {
        image: "🛠️",
        heading: "Contract-Based Facility Maintenance",
        description: "Electrical, plumbing, sanitation, pest control, and civil works under maintenance contracts.",
        category: "Private & Support Services",
    },

    // Compliance Support
    {
        image: "📄",
        heading: "Business Document Preparation",
        description: "Helping individuals and businesses prepare essential documents for registrations, tenders, or project setups.",
        category: "Compliance & Business Support",
    },
    {
        image: "🧾",
        heading: "GST Filing & Compliance Support",
        description: "Support for GST filings and tax documentation (Disclaimer: Not a certified CA).",
        category: "Compliance & Business Support",
    },
];

// Work orders (excluded from normal service cards)
const workOrders = [
    {
        workTitle: "Arrangement of Drinking Water Cooler at Different Monuments of M.P. North Zone, Gwalior",
        orgChain: "Directorate of Archaeology - Archives and Museums || AAM - Gwalior",
        file: "/WO-ArcheologicalDepartment.pdf",
    },
    {
        workTitle: "Various R and M of Civil works of residential building under O and M Circle Bhind",
        orgChain: "MPMKVVCL - Regional Office Gwalior || Gwalior City Circle",
        file: "/WO-MPMKVVCL_Bhind_Renovation.pdf",
    },
];

export default function Services() {
    // Grouping services by category
    const groupedServices = servicesData.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <>

            <Suspense fallback={<p className="text-center py-8">Loading chalri bhai, rukja thoda.....</p>}>
                <Header />
            </Suspense>

            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-sky-100 to-white text-center py-16 px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise, Your Trust</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Delivering government-compliant infrastructure, private project execution, and compliance support with precision and dedication.
                </p>
            </section>
            <div className="flex justify-center items-center pt-16 max-sm:pt-8 max-lg:pt-12">
                <div className="w-full max-sm:flex-col xl:mx-20 lg:mx-10 px-4 xl:px-20 lg:px-10 max-w-[1310px]">

{console.log(groupedServices, typeof groupedServices,  'harsh')}
{console.log(Object.entries(groupedServices), typeof Object.entries(groupedServices), 'harsh11111')}
                    {/* === Grouped Services === */}
                    <section className="">
                        {Object.entries(groupedServices).map(([category, items], index) => (
                            <div key={index} className="mb-16">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-l-4 border-orangee pl-4">
                                    {category}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {items.map((item, idx) => (
                                        <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition-all duration-300">
                                            <div className="text-4xl mb-4">{item.image}</div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.heading}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/* === WORK ORDERS === */}
                        <div className="mb-16">

                            <h2 className="text-4xl font-bold underline mb-8 text-center">Work Orders</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {workOrders.map((cert, index) => (
                                    <div key={index} className="p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-900 hover:shadow-lg transition" >
                                        <h3 className="text-xl font-semibold text-orange-600 mb-4 text-center"><span className="underline text-gray-800 dark:text-gray-200">{!!cert.workTitle && cert.workTitle !== "" ? "Work Title:" : ""}</span>{!!cert.workTitle && cert.workTitle !== "" ? " " : ""}{cert.name || cert.workTitle}</h3>
                                        <PDFViewer file={cert.file} />
                                        <p className="text-md font-medium mt-4 text-gray-700 dark:text-gray-300">
                                            <span className="font-semibold underline">Organisation Chain:</span> {cert.orgChain}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* Why Choose Us */}
            <section className="bg-gray-100 pb-16 px-4">
                <div className="max-w-[1300px] mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Neelam Enterprises?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "✅", text: "Govt Registered & Compliant" },
                            { icon: "🛠️", text: "On-Time, Quality Execution" },
                            { icon: "🤝", text: "Personalized Client Support" },
                            { icon: "🔒", text: "Trusted by Public Institutions" },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" >
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <p className="text-sm text-gray-700 font-medium">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactUsBanner />
            <CompanyInfo />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}