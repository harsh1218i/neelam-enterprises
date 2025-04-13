export default function ProjectCard({ classNameProp, projectName, orgChain, location, amount, year, tenderId, status, days, }) {
    return (
        <div className={`inline-block p-4 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.04] ease-in-out bg-gray-100 dark:bg-neutral-800 min-h-[400px] ${!!classNameProp && classNameProp !== '' ? classNameProp : ''}`}>
            <h1 className="text-xl font-semibold mb-2 text-center text-orange-600">{projectName}</h1>
            <div className="text-sm space-y-1">
                <p><strong className="text-base underline">Organisation Chain:</strong> {orgChain}</p>
                <p><strong className="text-base underline">Tender Id:</strong> {tenderId}</p>
                <p><strong className="text-base underline">Location:</strong> {location}</p>
                <p><strong className="text-base underline">Year:</strong> {year}</p>
                <p><strong className="text-base underline">Period Of Work (Days):</strong> {days}</p>
                <p><strong className="text-base underline">Value:</strong> {amount}</p>
                <p><strong className="text-base underline">Status:</strong> {status}</p>
            </div>
        </div>
    );
}