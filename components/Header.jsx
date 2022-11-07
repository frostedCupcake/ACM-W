import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dbmw0xoar/image/upload/v1667804160/ecell/ACM-W/LOGO1_ht9fjr.png"
            }
            width="300"
            height="300"
          />
        </div>
        <h1 className="uppercase md:text-3xl tracing-wide py-5 text-[#33769C] font-sans">
          ACM-Women
        </h1>
        <h1 className="uppercase md:text-2xl tracking-widest text-[#33769C]">
          Student Chapter IITH
        </h1>
        <div className="w-[80%] sm:w-[30rem] md:w-[40rem] py-10">
          We are glad to announce the launch of the ACM Women Student Chapter, a
          networking platform to bring together all the young minds in
          engineering to fire their inner leader, make notable contributions to
          tech, and broaden their connections. We aim to usher these young minds
          into the student community to leap forward in envisioning their dream
          selves
        </div>
      </div>
    </section>
  );
};

export default Header;
