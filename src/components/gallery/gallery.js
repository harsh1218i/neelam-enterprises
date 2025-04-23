import ProjectCard from "./projectCard";

const projectsData = [
    {
      projectName: "Various R and M of Civil works of residential building under O and M Circle Bhind",
      orgChain: "Madhya Pradesh Madhya Kshetra Vidyut Vitaran Company Limited || MPMKVVCL - Regional Office Gwalior || MPMKVVCL - Gwalior City Circle",
      location: "Bhind, Madhya Pradesh",
      amount: "₹3,54,237",
      tenderId: "2024_MKVVC_385943_2",
      year: "2025",
      status: "Completed",
      days: "60"
    },
    {
      projectName: "Public Road Patchwork - Hoshangabad",
      orgChain: "PWD Hoshangabad Subdivision",
      location: "Hoshangabad, MP",
      amount: "₹12 Lakhs",
      year: "2024",
      status: "Completed"
    },
    {
      projectName: "Arrangement of Drinking Water Cooler at Different Monuments of M.P. North Zone, Gwalior",
      orgChain: "Directorate of Archaeology - Archives and Museums || AAM - Gwalior",
      location: "Gwalior, MP",
      amount: "₹4,96,620",
      tenderId: "2024_DAAM_387366_1",
      year: "2025",
      status: "Completed",
      days: "15"
    },
    {
      projectName: "MES Facility Repairs - Cantonment",
      orgChain: "Military Engineering Services (MES)",
      location: "Gwalior Cantonment",
      amount: "₹9.7 Lakhs",
      year: "2024",
      status: "Completed"
    }
  ];

export default function Gallery() {
    return (
        <section className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex flex-col xl:mx-20 lg:mx-10 px-4 xl:px-20 lg:px-10 max-w-[1310px]">
                <h1 className="text-4xl max-sm:text-2xl underline font-bold mb-8">
                    Completed/Ongoing Projects
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {projectsData.map((projectDetails, index) => (
                        <ProjectCard key={index} {...projectDetails}/>
                    ))}
                </div>
            </div>
        </section>
    );
}