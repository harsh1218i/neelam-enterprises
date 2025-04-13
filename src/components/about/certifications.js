const certificationFiles = [
    { name: "GST Certificate", file: "Company/NeelamEnterprises_GST.pdf" },
    { name: "MP PWD Registration", file: "Company/NeelamEnterprises_MP_PWD_RegistrationCertificate.pdf" },
    { name: "MSME Certificate", file: "Company/NeelamEnterprises_MSME_UdyamRegistrationCertificate.pdf" },
    { name: "Shop & Establishment Act License", file: "Company/NeelamEnterprises_ShopAct.pdf" },
    { name: "MPMKVVCL Civil Registration", file: "Company/NeelamEnterprises_MPMKVVCL_Civil_License.pdf" },
    { name: "MPMKVVCL Supply Registration", file: "Company/NeelamEnterprises_MPMKVVL_Supply_License.pdf" },
    { name: "EPFO Registration", file: "Company/NeelamEnterprises_EPFO.pdf" },
];
const workOrders = [
    { name: "Arrangement of Drinking Water Cooler at Different Monuments of M.P. North Zone, Gwalior", orgChain: "Directorate of Archaeology - Archives and Museums||AAM - Gwalior", file: "WorkOrders/WO-ArcheologicalDepartment.pdf" },
    { name: "Various R and M of Civil works of residential building under O and M Circle Bhind", orgChain: "Madhya Pradesh Madhya Kshetra Vidyut Vitaran Company Limited||MPMKVVCL - Regional Office Gwalior||MPMKVVCL - Gwalior City Circle", file: "WorkOrders/WO-MPMKVVCL_Bhind_Renovation.pdf" },
];

export default function Certifications() {
    return (
        <div className="flex flex-col justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full mb-20 xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <h2 className="text-4xl font-bold underline mb-8">
                    Company Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificationFiles.map((cert, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-900 transition hover:shadow-lg">
                            <h3 className="text-lg font-semibold text-orange-600 mb-2">{cert.name}</h3>
                            <div className="w-full h-[350px] overflow-auto scrollbar-hide relative">
                                <iframe src={`/certifications/${cert.file}#toolbar=0&navpanes=0&scrollbar=0`} className="w-full h-full rounded" title={cert.name}></iframe>
                                {/* optional: overlay to prevent right-click */}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mb-20 xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <h2 className="text-4xl font-bold underline mb-8">Work Orders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workOrders.map((cert, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-md bg-white dark:bg-neutral-900 transition hover:shadow-lg">
                            <h3 className="text-xl font-semibold text-orange-600 mb-2">{cert.name}</h3>
                            <div className="w-full h-[350px] overflow-hidden relative">
                                <iframe src={`/certifications/${cert.file}#toolbar=0&navpanes=0&scrollbar=0`} className="w-full h-full rounded" title={cert.name}></iframe>
                                {/* optional: overlay to prevent right-click */}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                            </div>
                            <p className="text-lg font-semibold mb-2"><strong className="underline">Organisation Chain</strong>: {cert.orgChain}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}