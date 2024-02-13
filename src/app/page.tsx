import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-40">
      <div className="flex mx-auto">
        {/* Left Side */}
        <div className="font-mono">
          <h1 className="text-xl font-bold">Vitate na stranke naČas</h1>
          <p>Prihlaste sa alebo nakupuje hned!</p>
          <div className='mt-2'>
            <Link href={`/doctors`} className="bg-gray-200 p-2 rounded-lg mr-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out">
              Chcem sa objednat !
            </Link>
            <Link href={`/shop`} className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out">
              Nakupuj Hned!
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gray-200 flex items-center justify-center ml-2 rounded-lg">
          <span>Picture goes here</span>
          {/* Replace <span> with an <img> tag or another component for the picture */}
        </div>
      </div>
    </main>
  );
}
