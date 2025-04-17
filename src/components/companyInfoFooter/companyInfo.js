import SocialMediaLinks from "../socialMediaLinks/socialMediaLinks";
import options from "../../utilities/contact-us-options";
// import style from "./CompanyInfo.module.scss"

export default function CompanyInfo() {
    return (
        <div className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="basis-1/3">
                    <h1 className="text-2xl md:text-3xl font-bold my-2">{options.name}</h1>
                </div>
                <div className="basis-1/6 sm:px-2">
                    <p className="text-2xl font-medium my-2">Address</p>
                    <p className="py-2">
                        {options.address} <br />
                        {!!options.landmark && options.landmark !== '' ? <p>Landmark: {options.landmark} </p> : <></>}
                        {options.city} - {options.zip} <br />
                        {options.state} <br />
                        <a className='text-orangee flex items-center max-w-fit' href="https://maps.app.goo.gl/zKy5RRaZQW6td7ZXA" target="blank">
                            Directions
                            <svg className='inline ml-1' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#f26621"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                        </a>
                    </p>
                </div>
                <div className="basis-1/3 sm:px-2">
                    <p className="text-2xl font-medium my-2">Contact Us</p>
                    <div className="flex flex-col"></div>
                    {!!options.phone && options.phone !== '' ? <p className="pt-2">Phone No:<a className='text-orangee' href={`tel:${options.phone}`}>{options.phone}</a></p> : <></>}
                    <p className='pt-2'>Email: <a className='text-orangee' href={`mailto:${options.company_email_domain}`}>{options.company_email_domain}</a></p>
                    <p className='py-2'><a className='text-orangee' href={`mailto:${options.company_email_gmail}`}>{options.company_email_gmail}</a></p>
                </div>
                <div className="basis-1/6 sm:px-2">
                    <p className="text-2xl font-medium my-2">Social Media</p>
                    <SocialMediaLinks />
                </div>
            </div>
        </div>
    )
}