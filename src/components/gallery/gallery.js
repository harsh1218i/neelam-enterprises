import ProjectCard from "./projectCard";

export default function Gallery() {
    return (
        <div className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="">
                    <h1 className="text-3xl font-bold mb-2">Completed Projects / Gallery</h1>
                    <ProjectCard classNameProp="mr-6" projectName="Project-1" />
                    <ProjectCard classNameProp="mr-6" projectName="Project-2" />
                    <ProjectCard classNameProp="mr-6" projectName="Project-3" />
                    <ProjectCard projectName="Project-4" />
                </div>
            </div>
        </div>
    )
}