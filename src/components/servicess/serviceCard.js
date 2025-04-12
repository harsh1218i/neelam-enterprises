export default function ServiceCard({ classNameProp, heading, image, description }) {
    return (
      <div className={`inline-block p-8 border-t-2 border-orange-400 shadow-2xl shadow-orange-100 min-h-[300px] w-full rounded-b-2xl transition-transform duration-300 hover:scale-[1.05] ${!!classNameProp && classNameProp !== '' ? classNameProp : ''}`}>
        <h1 className="text-center text-lg font-semibold mb-4">
          <span className="pe-2">{!!image ? image : null}</span>
          <span className="underline text-xl">
            {!!heading && heading !== "" ? heading : "This is heading"}
          </span>
        </h1>
        <p className="text-justify text-lg text-gray-700 dark:text-gray-200">
          {!!description && description !== ''? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
        </p>
      </div>
    );
  }