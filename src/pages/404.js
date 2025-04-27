import Link from 'next/link';
import Header from '../components/header/header';
import CompanyInfo from '../components/companyInfoFooter/companyInfo';
import Footer from '../components/footer/footer';
import ScrollToTopButton from '../components/scrollToTopButton/scrollToTopButton';

const Custom404 = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-4">Sorry, the page you are looking for does not exist.</p>
                {/* <Link href="/" legacyBehavior>
                    <a className="text-blue-500 hover:underline text-lg">Go back home</a>
                </Link> */}
                {/* Back to Home */}
                <div className="flex justify-center mt-6">
                    <a href="/" className="flex items-center text-orangee hover:underline text-sm font-medium">
                        {/* Left Arrow Icon */}
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Back to Home
                    </a>
                </div>
            </div>
            <CompanyInfo />
            <Footer />
            <ScrollToTopButton />
        </>
    );
};
export default Custom404;