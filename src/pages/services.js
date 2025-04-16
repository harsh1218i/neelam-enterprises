import { lazy, Suspense } from "react";
import ContactUsBanner from "../components/contactUsForm/contactUsBanner";
import CompanyInfo from "../components/companyInfoFooter/companyInfo";
import Footer from "../components/footer/footer";
import ScrollToTopButton from "../components/scrollToTopButton/scrollToTopButton";

const Header = lazy(() => import("../components/header/header"));

const servicesData = [
    // Government Category
    {
        image: "📑",
        heading: "Government Tender Execution",
        description:
            "End-to-end execution of government tenders including documentation, site setup, contractor coordination, and quality control.",
        category: "Government Projects",
    },
    {
        image: "🏗️",
        heading: "Public Infrastructure Development",
        description:
            "Construction of school buildings, public toilets, and other public utilities under approved norms.",
        category: "Government Projects",
    },
    {
        image: "🏢",
        heading: "Renovation & Maintenance of Govt Quarters",
        description:
            "Civil, plumbing, electrical, and painting work in government quarters with long-term durability.",
        category: "Government Projects",
    },
    {
        image: "🪖",
        heading: "Military & Cantonment Area Projects",
        description:
            "MES and defense area projects executed under strict military protocol and standards.",
        category: "Government Projects",
    },
    {
        image: "🚰",
        heading: "RO & Water Cooler Installation",
        description:
            "Installation of water purifiers and coolers in public places with maintenance options.",
        category: "Government Projects",
    },

    // Private + Support Category
    {
        image: "🎨",
        heading: "Interior Designing & Architecture",
        description:
            "Interior and architectural design for offices and public buildings blending aesthetics and functionality.",
        category: "Private & Support Services",
    },
    {
        image: "🛠️",
        heading: "Contract-Based Facility Maintenance",
        description:
            "Electrical, plumbing, sanitation, pest control, and civil works under maintenance contracts.",
        category: "Private & Support Services",
    },

    // Compliance Help
    {
        image: "📄",
        heading: "Business Document Preparation",
        description:
            "Helping individuals and businesses prepare essential documents for registrations, tenders, or project setups.",
        category: "Compliance & Business Support",
    },
    {
        image: "🧾",
        heading: "GST Filing & Compliance Support",
        description:
            "Support for GST filings and tax documentation (Disclaimer: Not a certified CA).",
        category: "Compliance & Business Support",
    },
];

export default function Services() {
    const groupedServices = servicesData.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
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
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Delivering government-compliant infrastructure, private project execution, and compliance support with precision and dedication.</p>
            </section>
            {/* Services Sections */}
            <section className="py-16 px-4 max-w-[1300px] mx-auto">
                {Object.entries(groupedServices).map(([category, items], index) => (
                    <div key={index} className="mb-16">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-l-4 border-orangee pl-4">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {items.map((item, idx) => (
                                <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition-all duration-300" >
                                    <div className="text-4xl mb-4">{item.image}</div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.heading}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gray-100 py-16 px-4">
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