export default function ServiceCard({ classNameProp, heading, image }) {
    return (
        <div className={`${classNameProp} inline-block p-4 border-t-[0.75px] border-orange mb-8 shadow-2xl h-[400px] w-[255px] max-sm:w-full`}>
            <h1 className="text-center text-lg font-semibold mb-4">
                <span className="pe-2">{!!image ? image : null}</span>
                <span className="underline">{!!heading && heading !== '' ? heading : 'This will be the heading'}</span>
            </h1>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    )
}