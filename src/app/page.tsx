import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-40">
      <div className="flex mx-auto">
        {/* Left Side */}
        <div className="font-mono">
          <h1 className="text-3xl font-bold">Vitajte na stránke NaČas</h1>
          <p>Prihlaste sa alebo nakupuje hned!</p>
          <div className="mt-10">
            <Link
              href={`/doctors`}
              className="bg-green-300 p-2 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out mr-2 mt-5"
            >
              Chcem sa objednat !
            </Link>
            <Link
              href={`/shop`}
              className="bg-green-300 p-2 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Nakupuj Hned!
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center ml-2 rounded-lg">
          <img
            src="/pictures/female-doctor-using-her-digital-tablet-free-vector-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
