export default function SectionDivider({classNameProp}) {
    return <hr className={`border border-orangee my-12 ${classNameProp ? classNameProp : ''}`} />;
}