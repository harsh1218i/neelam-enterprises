export default function AboutUs() {
    return (
        <section className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Who We Are</h2>
                    {/* <p className="inline-block my-1 text-justify">Neelam Enterprises is a government-registered contractor specializing in public infrastructure and civil works.</p>
                    <p className="inline-block my-1 text-justify">Based in Gwalior (Madhya Pradesh), we execute tenders for departments like MPPWD, CPWD, Indian Railways, and MES.</p> */}
                    <p className="text-lg text-gray-700 dark:text-gray-100 inline-block text-justify">
                        Neelam Enterprises is a trusted, government-registered contractor based in Madhya Pradesh.
                        We specialize in executing public sector infrastructure projects through tender systems,
                        with successful work done for departments like <strong>PWD</strong>, <strong>CPWD</strong>,
                        <strong>Indian Railways</strong>, and <strong>MES</strong>.
                    </p>
                    <p className="mt-4 text-md text-gray-500 dark:text-gray-300">
                        We believe in timely delivery, quality craftsmanship, and complete transparency in execution.
                    </p>
                    <a href="/about/company" className="text-blue-600 hover:underline font-medium">
                        Learn More About Us →
                    </a>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Our Clients</h2>
                    <ul className="list-decimal">
                        <li className="my-1 ms-5 text-justify">Directorate of Archaeology - Archives and Museums || AAM - Gwalior</li>
                        <li className="my-1 ms-5 text-justify">Madhya Pradesh Madhya Kshetra Vidyut Vitaran Company Limited || MPMKVVCL - Regional Office Gwalior || MPMKVVCL - Gwalior City Circle</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}