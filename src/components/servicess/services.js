import ServiceCard from "./serviceCard";

export default function Services() {
    return (
        <div className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="">
                    <h1 className="text-3xl font-bold mb-2">Services</h1>
                    <ServiceCard classNameProp="mr-6" image="✅" heading="Tender Execution for Govt Departments"></ServiceCard>
                    <ServiceCard classNameProp="mr-6" image="🏗️" heading="Civil Construction & Maintenance"></ServiceCard>
                    <ServiceCard classNameProp="mr-6" image="🚧" heading="Railway & Defense Infrastructure Projects"></ServiceCard>
                    <ServiceCard image="📋" heading="Turnkey Solutions for Public Projects"></ServiceCard>
                    <ServiceCard classNameProp="mr-6"></ServiceCard>
                    <ServiceCard classNameProp="mr-6"></ServiceCard>
                    <ServiceCard classNameProp="mr-6"></ServiceCard>
                </div>
            </div>
        </div>
    )
}