import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Custom404 = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { asPath } = router;
  const similarLink = "/contact";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null if not mounted to prevent client/server mismatch
  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-600 text-center p-6">
      <Image
        src="/images/white_logo.png"
        alt="Your site logo"
        width={80}
        height={80}
        className="mb-6"
      />
      <h1 className="text-2xl font-extrabold text-white mb-4">ChrislainAvocegan.site</h1>

      <div className="bg-transparent p-6 rounded-lg shadow-lg max-w-6xl">
        <Image src="/images/404.svg" alt="404 Error" width={250} height={250} className="mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-4">
          Oops! The page you requested does not exist.
        </p>
        <p className="text-sm text-gray-200 mb-6">
          You entered: <span className="text-red-600 italic">{asPath}</span>
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Perhaps you were looking for this page?{" "}
          <Link href={similarLink}>
            <a className="text-blue-600 underline hover:text-blue-800">
              {similarLink}
            </a>
          </Link>
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Go Back
          </button>
          <Link href="/">
            <a className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
              Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
