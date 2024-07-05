// import './footer.scss'
export default function Footer() {
    return (
        <footer className="flex max-xl:flex-col justify-center mt-6 text-sm text-footer-gray dark:text-gray-400 bg-gray-100 dark:bg-gray-900">
            <span className="pr-1 text-center">Copyright ©2024 Ashok Buildcon. All Rights Reserved |</span>
            <div className="flex justify-center items-center max-md:flex-col">
                <p className="pr-1">Developed By:<a className="text-orange pl-1" href='/'>Harsh Developer</a></p>
                <p className="px-1">Phone No:<a className='text-orange pl-1' href="tel:+917415939251">+91-7415939251</a></p>
                <p className="pl-1">Email:<a className='text-orange pl-1' href="mailto:chauhanharshvardhansingh4@gmail.com">chauhanharshvardhansingh4@gmail.com</a></p>
            </div>
        </footer>
    );
}