import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <section className="">
      <div className="flex flex-col-reverse 12xl:flex-row justify-center items-center py-[5rem] xl:py-[8rem] gap-10">
        {/* <Image
          src={
            'https://res.cloudinary.com/dbmw0xoar/image/upload/v1684682725/ecell/ACM-W/ACM-w_iith_transparent_logo_1_pd1hrt.png'
          }
          width="700"
          height="700"
          alt="ACM-W Logo"
          className="w-[20rem]"
        /> */}
        <div className="flex flex-col items-center 12xl:items-start justify-center gap-3 px-2">
          {/* <Image
            src={
              'https://res.cloudinary.com/dbmw0xoar/image/upload/v1684682725/ecell/ACM-W/ACM-w_iith_transparent_logo_1_pd1hrt.png'
            }
            width="700"
            height="700"
            alt="ACM-W Logo"
            className="w-[20rem]"
          /> */}
          <h1 className="uppercase text-[1.7rem] 8xl:text-[2rem] 11xl:text-[2.3rem] 14xl:text-[2.5rem] tracking-widest  text-[#33769C] main__font">
            ACM-Women
          </h1>
          <h1 className="uppercase text-[1.5rem] 8xl:text-[2rem] 11xl:text-[2.3rem] 14xl:text-[2.5rem]  tracking-widest text-[#33769C]  main__font mb-5">
            Student Chapter IITH
          </h1>
          <div className="w-[90%] md:w-[40rem]  text-center 12xl:text-justify leading-7 tracking-wider text-[.9rem] 8xl:text-[1.1rem] 12xl:text-[1rem] 14xl:text-[1.1rem] ">
            We are glad to announce the launch of the ACM Women Student Chapter,
            a networking platform to bring together all the young minds in
            engineering to fire their inner leader, make notable contributions
            to tech, and broaden their connections. We aim to usher these young
            minds into the student community to leap forward in envisioning
            their dream selves
          </div>
        </div>
        <div className="w-[90%] 8xl:w-[45rem] 12xl:w-[30rem] 14xl:w-[40rem]  rounded-md shadow-xl">
          <img
            src={
              'https://res.cloudinary.com/dbmw0xoar/image/upload/v1668542351/ecell/ACM-W/ACMW-Heads_1_msi0h7.jpg'
            }
            alt={'ACM-W Logo'}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
