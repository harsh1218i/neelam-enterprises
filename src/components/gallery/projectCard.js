export default function ProjectCard({ classNameProp, projectName, orgChain, location, amount, year, tenderId, status, days, }) {
    return (
        <div className={`inline-block p-4 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.04] ease-in-out bg-gray-100 dark:bg-neutral-800 min-h-[400px] ${!!classNameProp && classNameProp !== '' ? classNameProp : ''}`}>
            <h1 className="text-xl font-semibold mb-2 text-center text-orange-600">{projectName}</h1>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong>Organisation Chain:</strong> {orgChain}</p>
                <p><strong>Tender Id:</strong> {tenderId}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Year:</strong> {year}</p>
                <p><strong>Period Of Work(Days):</strong> {days}</p>
                <p><strong>Value:</strong> {amount}</p>
                <p><strong>Status:</strong> {status}</p>
            </div>
        </div>
    );
}