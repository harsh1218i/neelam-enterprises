import ServiceCard from "./serviceCard";

const servicesData = [
  {
    classNameProp: "",
    image: "✅",
    heading: "Tender Execution for Govt Departments",
    description: 'Tender Execution for Govt Departments Tender Execution for Govt Departments Tender Execution for Govt Departments Tender Execution for Govt Departments Tender Execution for Govt Departments Tender Execution for Govt Departments'
  },
  {
    classNameProp: "",
    image: "🏗️",
    heading: "Civil Construction & Maintenance",
    description: 'Civil Construction & Maintenance Civil Construction & Maintenance Civil Construction & Maintenance Civil Construction & Maintenance Civil Construction & Maintenance'
  },
  {
    classNameProp: "",
    image: "🚧",
    heading: "Railway & Defense Infrastructure Projects",
    description: 'Railway & Defense Infrastructure Projects Railway & Defense Infrastructure Projects Railway & Defense Infrastructure Projects Railway & Defense Infrastructure Projects Railway & Defense Infrastructure Projects'
  },
  {
    classNameProp: "",
    image: "📋",
    heading: "Turnkey Solutions for Public Projects",
  },
];

export default function Services() {
  return (
    <div className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
      <div className="flex w-full justify-between flex-col max-lg:items-center xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
        <h1 className="text-4xl font-bold mb-8 underline">Services</h1>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <ServiceCard
              key={i}
              classNameProp={service.classNameProp}
              image={service.image}
              heading={service.heading}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}