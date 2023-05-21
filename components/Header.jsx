import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <section className="">
      <div className="flex flex-row justify-center items-center my-[5rem] gap-10">
        <div className="w-[80%] sm:w-[50%] md:w-[40rem] rounded-md shadow-xl">
          <img
            src={
              'https://res.cloudinary.com/dbmw0xoar/image/upload/v1668542351/ecell/ACM-W/ACMW-Heads_1_msi0h7.jpg'
            }
            alt={'ACM-W Logo'}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src={
              'https://res.cloudinary.com/dbmw0xoar/image/upload/v1684682725/ecell/ACM-W/ACM-w_iith_transparent_logo_1_pd1hrt.png'
            }
            width="700"
            height="700"
            alt="ACM-W Logo"
            className="w-[20rem]"
          />
          <h1 className="uppercase text-[1.1rem] lg:text-[2.5rem] tracking-widest  text-[#33769C] main__font">
            ACM-Women
          </h1>
          <h1 className="uppercase lg:text-[2.5rem] md:text-2xl tracking-widest text-[#33769C]  main__font">
            Student Chapter IITH
          </h1>
          <div className="w-[80%] sm:w-[30rem] md:w-[40rem]  text-justify leading-7 tracking-wider lg:text-[1.1rem]">
            We are glad to announce the launch of the ACM Women Student Chapter,
            a networking platform to bring together all the young minds in
            engineering to fire their inner leader, make notable contributions
            to tech, and broaden their connections. We aim to usher these young
            minds into the student community to leap forward in envisioning
            their dream selves
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
