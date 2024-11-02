import Link from 'next/link';
import Header from '../components/header/header';
import CompanyInfo from '../components/companyInfoFooter/companyInfo';
import Footer from '../components/footer/footer';

const Custom404 = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-4">Sorry, the page you are looking for does not exist.</p>
                <Link href="/" legacyBehavior>
                    <a className="text-blue-500 hover:underline text-lg">Go back home</a>
                </Link>
            </div>
            <CompanyInfo />
            <Footer />
        </>
    );
};
export default Custom404;