"use client"
import { usePathname } from "next/navigation";
import options from "../../utilities/contact-us-options";

export default function ContactUsBanner() {
    const pathName = usePathname();
    const isContactUsPage = pathName.includes("/contact-us");

    const disableContactUs = (event) => {
        if (isContactUsPage) {
            event.preventDefault();
        }
    }

    return (
        <div className="flex justify-center items-center bg-orange">
        <div className="w-full min-h-[100px] md:py-14 py-10 xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 flex flex-col justify-between sm:flex-row max-w-[1310px]">
            <div className="flex flex-col basis-4/5 sm:pb-0 text-white">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold">
                    Contact {options.name}
                </h2>
                <p className="my-4 sm:mb-0">
                {options.name} is actively seeking new opportunities. We'd love to hear from you.
                </p>
            </div>
            <div className="flex w-full justify-center sm:justify-end items-center basis-1/5 max-sm:mt-4">
                <a href="/contact-us" className={`text-black px-4 rounded bg-white h-[36px] flex items-center ${pathName.includes("/contact-us") ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={disableContactUs}>Contact Us</a>
            </div>
        </div>
        </div>
    );
}