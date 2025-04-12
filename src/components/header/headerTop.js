import VisitorCounter from "../visitorCounter/visitor-counter";

export default function HeaderTop() {
    return (
        <>
            <div className="h-[52px] flex justify-center items-center className='p-4 bg-gray-800 text-orangee dark:bg-orangee dark:text-black'">
                {/* <div className="basis-5/12 h-[52px] flex items-center pl-8 2xl:pl-40 xl:pl-20 lg:pl-10 bg-gray-600 dark:bg-orangee space-x-2">Email</div> */}
                {/* <div className="basis-2/12 flex justify-center"> */}
                <div className="flex justify-center dark:text-black">
                <VisitorCounter />
                </div>
                {/* <div className="basis-5/12 h-[52px] flex items-center pr-8 2xl:pr-40 xl:pr-20 lg:pr-10 dark:bg-gray-600 bg-orangee flex-row-reverse">Contact Number</div> */}
            </div>
        </>
    )
}