import Image from 'next/image';
export default function AboutUs() {
    return (
        <section className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex justify-between max-lg:flex-col max-lg:items-center xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="pr-4 max-lg:mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Neelam Enterprises</h2>
                    <p className="text-lg text-justify text-gray-800 dark:text-gray-200 max-w-3xl">
                        Established in <strong>2024</strong>, <strong>Neelam Enterprises</strong> is a proprietorship firm founded with a mission to contribute to India's public infrastructure by offering dependable and transparent contract services. We are a <strong>government-registered contractor</strong> based in <strong>Gwalior, Madhya Pradesh</strong>, working extensively on projects for <strong>PWD</strong>, <strong>CPWD</strong>, <strong>Indian Railways</strong>, <strong>MES</strong>, and other departments.
                    </p>
                    <p className="mt-4 text-justify text-md text-gray-700 dark:text-gray-300 max-w-3xl">
                        From humble beginnings, our journey has been driven by hard work, ground-level knowledge, and a clear commitment to quality. With a strong foundation in civil works, maintenance contracts, and tender execution, we take pride in delivering projects on time and as promised.
                    </p>
                    <p className="mt-4 text-justify text-md text-gray-600 dark:text-gray-400 max-w-3xl">
                        Backed by certifications including <strong>GST registration</strong>, <strong>MPPWD Civil Registration</strong>, <strong>MSME certification</strong>, and <strong>Shop Act Registration</strong>, Neelam Enterprises operates with full compliance and integrity.
                    </p>
                    <div className="mt-6"><a href="/about/company" className="text-orangee hover:text-orange-400 font-medium"><strong className='hover:underline underline-offset-8'>Read More About Our Journey</strong><strong> →</strong></a></div>
                </div>
                <div className="relative w-[360px] h-[360px] flex items-center justify-center">
                    {/* Animated border wrapper */}
                    <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                        {/* Moving border layer */}
                        <div className="absolute inset-0 animate-border-move bg-[length:400%_400%] bg-gradient-to-tr to-lime-100 via-lime-400 from-green-700" />
                    </div>
                    {/* Inner white border to create spacing */}
                    <div className="absolute inset-1 rounded-3xl bg-white z-10" />
                    {/* Image on top */}
                    <Image alt="Logo" className="relative z-20 shadow-2xl shadow-orangee rounded-3xl" src="/favicon-16x16.png" width={350} height={350} />
                </div>
            </div>
        </section>
    )
}