import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col h-[91vh] justify-center items-center">
      <div className="flex mx-auto w-fit h-fit">
        <div className="font-mono flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Vitajte na stránke NaČas</h1>
          <p>Prihlaste sa alebo nakupuje hned!</p>
          <div className="mt-10">
            <Link
              href={`/doctors`}
              className="secondary mr-4 mt-5"
            >
              Chcem sa objednať!
            </Link>
            <Link
              href={`/shop`}
              className="secondary"
            >
              Nakupuj hneď!
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
