import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" legacyBehavior>
        <a className="text-blue-500 hover:underline text-lg">Go back home</a>
      </Link>
    </div>
  );
};
export default Custom404;