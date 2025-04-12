import Image from 'next/image';
export default function AboutUs() {
    return (
        // <section className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
        //     <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
        //         <div className="">
        //             <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Who We Are</h2>
        //             {/* <p className="inline-block my-1 text-justify">Neelam Enterprises is a government-registered contractor specializing in public infrastructure and civil works.</p>
        //             <p className="inline-block my-1 text-justify">Based in Gwalior (Madhya Pradesh), we execute tenders for departments like MPPWD, CPWD, Indian Railways, and MES.</p> */}
        //             <p className="text-lg text-gray-700 dark:text-gray-100 inline-block text-justify">
        //                 Neelam Enterprises is a trusted, government-registered contractor based in Madhya Pradesh.
        //                 We specialize in executing public sector infrastructure projects through tender systems,
        //                 with successful work done for departments like <strong>PWD</strong>, <strong>CPWD</strong>, <strong>Indian Railways</strong> and <strong>MES</strong>.
        //             </p>
        //             <p className="mt-4 text-md text-gray-500 dark:text-gray-300">
        //                 We believe in timely delivery, quality craftsmanship, and complete transparency in execution.
        //             </p>
        //             <a href="/about/company" className="text-blue-600 hover:underline font-medium">
        //                 Learn More About Us →
        //             </a>
        //             <h2 className="text-2xl font-semibold mt-6 mb-2">Our Clients</h2>
        //             <ul className="list-decimal">
        //                 <li className="my-1 ms-5 text-justify">Directorate of Archaeology - Archives and Museums || AAM - Gwalior</li>
        //                 <li className="my-1 ms-5 text-justify">Madhya Pradesh Madhya Kshetra Vidyut Vitaran Company Limited || MPMKVVCL - Regional Office Gwalior || MPMKVVCL - Gwalior City Circle</li>
        //             </ul>
        //         </div>
        //     </div>
        // </section>
        <section className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex justify-between max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="pr-4 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        About Neelam Enterprises
                    </h2>
                    <p className="text-lg text-justify text-gray-800 dark:text-gray-200 max-w-3xl">
                        Established in <strong>2024</strong>, <strong>Neelam Enterprises</strong> is a proprietorship firm founded with a mission to contribute to India's public infrastructure by offering dependable and transparent contract services. We are a <strong>government-registered contractor</strong> based in <strong>Gwalior, Madhya Pradesh</strong>, working extensively on projects for <strong>PWD</strong>, <strong>CPWD</strong>, <strong>Indian Railways</strong>, <strong>MES</strong>, and other departments.
                    </p>

                    <p className="mt-4 text-justify text-md text-gray-700 dark:text-gray-300 max-w-3xl">
                        From humble beginnings, our journey has been driven by hard work, ground-level knowledge, and a clear commitment to quality. With a strong foundation in civil works, maintenance contracts, and tender execution, we take pride in delivering projects on time and as promised.
                    </p>

                    <p className="mt-4 text-justify text-md text-gray-600 dark:text-gray-400 max-w-3xl">
                        Backed by certifications including <strong>GST registration</strong>, <strong>PWD contractor license</strong>, <strong>MSME certification</strong>, and <strong>Shop Act license</strong>, Neelam Enterprises operates with full compliance and integrity.
                    </p>

                    <div className="mt-6">
                        <a href="/about/company" className="text-orange hover:underline font-medium">
                            Read More About Our Journey →
                        </a>
                    </div>
                </div>
                <Image alt='Logo' className='shadow-2xl rounded-2xl shadow-orange' src='/favicon-16x16.png' width={400} height={400} />            </div>
        </section>
    )
}