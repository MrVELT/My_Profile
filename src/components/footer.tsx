'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const pathName = usePathname();
  return (
    <>
      {pathName === '/' && (
        <div className="bg-gray-800 flex items-center justify-center text-white h-[100px]">
          @2025 Mr.VELT Frontend Developer Profile.
        </div>
      )}
    </>
  );
};

export default Footer;
