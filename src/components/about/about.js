export default function AboutUs() {
    return (
        <div className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="">
                    <h1 className="text-3xl font-bold mb-2">About Us</h1>
                    <p className="inline-block my-1 text-justify">Neelam Enterprises is a government-registered contractor specializing in public infrastructure and civil works.</p>
                    <p className="inline-block my-1 text-justify">Based in Gwalior (Madhya Pradesh), we execute tenders for departments like MPPWD, CPWD, Indian Railways, and MES.</p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Our Clients</h2>
                    <ul className="list-decimal">
                        <li className="my-1 ms-5 text-justify">Directorate of Archaeology - Archives and Museums || AAM - Gwalior</li>
                        <li className="my-1 ms-5 text-justify">Madhya Pradesh Madhya Kshetra Vidyut Vitaran Company Limited || MPMKVVCL - Regional Office Gwalior || MPMKVVCL - Gwalior City Circle</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}