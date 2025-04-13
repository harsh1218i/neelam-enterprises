import ServiceCard from "./serviceCard";

const servicesData = [
  {
    image: "📑",
    heading: "Government Tender Execution",
    description: "We handle end-to-end execution of government tenders for departments like PWD, CPWD, and Urban Local Bodies. Our services include documentation, site setup, contractor coordination, quality control, and final handover — all done with complete compliance and professionalism."
  },
  {
    image: "🏗️",
    heading: "Public Infrastructure Development",
    description: "From school buildings and public toilets to boundary walls and drainage systems, we construct reliable and regulation-compliant public infrastructure that serves communities for years to come. All work is done under approved government norms."
  },
  {
    image: "🏢",
    heading: "Renovation & Maintenance of Govt Quarters",
    description: "We specialize in the renovation, repair, and ongoing maintenance of government quarters and institutional buildings. This includes civil, plumbing, electrical, and painting work — all executed with minimal disruption and maximum durability."
  },
  {
    image: "🪖",
    heading: "Military & Cantonment Area Projects",
    description: "With firsthand knowledge of cantonment protocols, we confidently take up MES and defense area projects — from boundary construction and facility upgrades to internal renovations — all adhering to strict security and technical standards."
  },
  {
    image: "🎨",
    heading: "Interior Designing & Architecture",
    description: "We offer custom interior and architectural solutions for government offices and public institutions. Our team blends functionality with modern aesthetics to create efficient and professional spaces — from floor plans to final finish."
  },
  {
    image: "🚰",
    heading: "RO & Water Cooler Installation",
    description: "We have executed tenders for installing water purifiers and coolers in parks, public places, and institutions. We ensure hygienic setups, certified installations, and optional long-term maintenance contracts."
  },
  {
    image: "🛠️",
    heading: "Contract-Based Facility Maintenance",
    description: "We provide full-scope maintenance services under long or short-term government contracts — covering electrical, plumbing, sanitation, pest control, and general civil works with guaranteed SLA-based performance."
  }
];

export default function Services() {
  return (
    <section className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
      <div className="flex w-full justify-between flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
        <h1 className="text-4xl max-sm:text-2xl font-semibold mb-8 underline">Services</h1>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}