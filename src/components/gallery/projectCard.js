export default function ProjectCard({ classNameProp, projectName }) {
    return (
        // <div className="flex flex-col justify-center items-center">
        //     <div className="basis-4/5"></div>
        //     <span className="basis-1/5">{projectName}</span>
        // </div>
        <div className={`${classNameProp} inline-block p-4 border-t-[0.75px] border-orangee mb-8 shadow-2xl h-[400px] w-[255px] max-sm:w-full`}>
            <h1 className="text-center text-lg font-semibold mb-4">
                {/* <span className="pe-2">{!!image ? image : null}</span> */}
                <span className="underline">{!!projectName && projectName !== '' ? projectName : 'Project Name'}</span>
            </h1>
        </div>
    )
}