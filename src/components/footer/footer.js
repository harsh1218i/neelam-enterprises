// import './footer.scss'
import options from "../../utilities/contact-us-options";
export default function Footer() {
    return (
        <footer className="flex justify-center items-center text-sm text-footer-gray dark:text-gray-400 bg-gray-100 dark:bg-gray-900">
            <div className="flex max-xl:flex-col justify-center max-w-[1310px]">
                <span className="pr-1 text-center">Copyright ©2024 {options.name}. All Rights Reserved |</span>
                <div className="flex justify-center items-center max-md:flex-col">
                    <p className="pr-1">Developed By:<a className="text-orange pl-1 opacity-60" href='/'>Harshvardhan Singh Chauhan</a></p>
                    <p className="px-1">Phone No:<a className='text-orange pl-1 opacity-60' href={`tel:${options.phone}`}>{options.phone}</a></p>
                    <p className="pl-1">Email:<a className='text-orange pl-1 opacity-60' href={`mailto:${options.personal_email}`}>{options.personal_email}</a></p>
                </div>
            </div>
        </footer>
    );
}