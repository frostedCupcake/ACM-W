import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div
      className="mt-[1rem] px-2 mx-10 sm:px-4  rounded-2xl relative bottom-2 py-[2rem] 
      bg-[#22272E]/90  flex flex-row items-center justify-around"
    >
      <Image
        src={
          'https://res.cloudinary.com/dbmw0xoar/image/upload/v1684682725/ecell/ACM-W/ACM-w_iith_transparent_logo_1_pd1hrt.png'
        }
        width="700"
        height="700"
        alt="ACM-W Logo"
        className="w-[10rem]"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="text-[.9rem] text-white/90 py-1">
          Copyright © 2023 ACM-W, Student Chapter IIT Hyderbad
        </div>
      </div>
    </div>
  );
};

export default Footer;
