import SocialMediaLinks from "../socialMediaLinks/socialMediaLinks";

export default function CompanyInfo() {
    return (
        <div className="flex justify-center items-center py-16 max-sm:py-8 max-lg:py-12">
            <div className="w-full flex max-sm:flex-col xl:mx-20 lg:mx-10 px-8 xl:px-20 lg:px-10 max-w-[1310px]">
                <div className="basis-1/4">
                    <h1 className="text-2xl md:text-3xl font-bold my-2">Ashok Buildcon</h1>
                </div>
                <div className="basis-1/4 sm:px-2">
                    <h4 className="text-2xl font-medium my-2">Address</h4>
                    <p className='py-2'>133 Pearl Street, Suite 300 <br />Boston, MA 02110 <br />
                        <a className='text-orange flex items-center' href="https://maps.app.goo.gl/R3NK78yeTTReqcAF9" target="blank">
                            Directions
                            <svg className='inline ml-1' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#f26621"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                        </a>
                    </p>
                </div>
                <div className="basis-1/4 sm:px-2">
                    <h4 className="text-2xl font-medium my-2">Contact Us</h4>
                    <div className="flex flex-col"></div>
                    <p className='pt-2'>Phone No: <a className='text-orange' href="tel:+917415939251">+91-8435272170</a></p>
                    <p className='pb-2'>Phone No: <a className='text-orange' href="tel:+917415939251">+91-6268100277</a></p>
                    <p className='py-2'>Email: <a className='text-orange' href="mailto:puneetdwevedi2@gmail.com">puneetdwevedi2@gmail.com</a></p>
                </div>
                <div className="basis-1/4 sm:px-2">
                    <h4 className="text-2xl font-medium my-2">Social Media</h4>
                    <SocialMediaLinks/>
                </div>
            </div>
        </div>
    )
}