'use client';
import Link from 'next/link';
import React from 'react';

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white relative">
      <h1 className="font-bold text-8xl absolute top-[25%] text-black">404</h1>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404"
      />
      <p className="text-4xl absolute top-[70%] text-black">
        Look like you're lost
      </p>
      <p className="text-xl absolute top-[75%] text-gray-500">
        the page you are looking for not avaible!
      </p>
      <Link href="/" className="bg-green-500 rounded-lg p-3 text-white">
        Go to Home
      </Link>
    </div>
  );
};

export default Page404;
