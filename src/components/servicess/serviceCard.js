export default function ServiceCard({classNameProp, heading}) {
    return (
        <div className={`${classNameProp} inline-block py-4 border-t-[0.75px] border-orange mb-8 shadow-2xl border-black h-[400px] w-[255px]`}>
            <h1 className="text-center text-lg underline font-semibold">{heading}</h1>
        </div>
    )
}