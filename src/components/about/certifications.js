'use client';

import dynamic from "next/dynamic";
const PDFViewer = dynamic(() => import("./pdfViewer"), {
    ssr: false, // 🔥 disables SSR for this component
});
const certificationFiles = [
    { name: "GST Certificate", file: "/NeelamEnterprises_GST.pdf" },
    { name: "MP PWD Registration", file: "/NeelamEnterprises_MP_PWD_RegistrationCertificate.pdf" },
    { name: "MSME Certificate", file: "/NeelamEnterprises_MSME_UdyamRegistrationCertificate.pdf" },
    { name: "Shop & Establishment Act License", file: "/NeelamEnterprises_ShopAct.pdf" },
    { name: "MPMKVVCL Civil Registration", file: "/NeelamEnterprises_MPMKVVCL_Civil_License.pdf" },
    { name: "MPMKVVCL Supply Registration", file: "/NeelamEnterprises_MPMKVVL_Supply_License.pdf" },
    { name: "EPFO Registration", file: "/NeelamEnterprises_EPFO.pdf" },
];
const workOrders = [
    {
        name: "Arrangement of Drinking Water Cooler at Different Monuments of M.P. North Zone, Gwalior",
        orgChain: "Directorate of Archaeology - Archives and Museums || AAM - Gwalior",
        file: "/WO-ArcheologicalDepartment.pdf"
    },
    {
        name: "Various R and M of Civil works of residential building under O and M Circle Bhind",
        orgChain: "MPMKVVCL - Regional Office Gwalior || Gwalior City Circle",
        file: "/WO-MPMKVVCL_Bhind_Renovation.pdf"
    },
];
export default function Certifications() {
    return (
        <div className="flex flex-col justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            {/* === CERTIFICATIONS === */}
            <div className="w-full mb-20 xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <h1 className="text-4xl max-sm:text-2xl max-lg:text-3xl font-bold underline mb-8 text-center">Company Registrations & Licenses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificationFiles.map((cert, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-900 hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-orange-600 mb-4 text-center">{cert.name}</h3>
                            <PDFViewer file={`${cert.file}`} />
                        </div>
                    ))}
                </div>
            </div>
            {/* === WORK ORDERS === */}
            <div className="w-full mb-20 xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <h2 className="text-4xl font-bold underline mb-8 text-center">Work Orders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workOrders.map((cert, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-900 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-orange-600 mb-4 text-center">{cert.name}</h3>
                            <PDFViewer file={`${cert.file}`} />
                            <p className="text-md font-medium mt-4 text-gray-700 dark:text-gray-300">
                                <span className="font-semibold underline">Organisation Chain:</span> {cert.orgChain}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}