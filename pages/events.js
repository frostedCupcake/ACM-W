import Image from 'next/image';
import React from 'react';
import EventCarousel from '../components/EventCarousel';
import Events from '../components/Events';
import Navbar from '../components/Navbar';

const events = () => {
  const e4Data = [
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860699/ACM-W/IMG-20230413-WA0016_qck2ft.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860699/ACM-W/IMG-20230413-WA0025_gztrj0.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860699/ACM-W/IMG-20230413-WA0026_qulfec.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860699/ACM-W/IMG-20230413-WA0020_cy7a6i.jpg',
  ];
  const e3Data = [
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860737/ACM-W/acm3_1_nlsy2a.png',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860738/ACM-W/acm2_bmwx6x.png',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860739/ACM-W/DSC_0451_ma7qec.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860739/ACM-W/DSC_0446_1_zaqpwt.jpg',
  ];
  const e2Data = [
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684860811/ACM-W/_MG_5067_zifdfh.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684862368/ACM-W/_MG_5039_ehk6r0.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684862369/ACM-W/_MG_5048_ra2al5.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684862369/ACM-W/_MG_5071_kc4ycy.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684862369/ACM-W/_MG_5085_f1eomk.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684862369/ACM-W/_MG_5075_sogc3m.jpg',
    'https://res.cloudinary.com/dzegys5yk/image/upload/v1684862369/ACM-W/_MG_5088_ionnyw.jpg',
  ];
  const e1Data = [
    'https://res.cloudinary.com/dbmw0xoar/image/upload/v1668541971/ecell/ACM-W/acm_event1_drbadi.jpg',
  ];
  return (
    <div className="bg-[#B7D7E5]">
      <Navbar />
      <div className="flex flex-col pt-[2rem] pb-[5rem] gap-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-5 mx-auto items-center justify-center">
            <h5 className="text-center text-xl md:text-2xl lg:text-[2rem] border-b-[3px] border-[#33769C] my-5 capitalize text-[#33769C] main__font w-fit">
              RecHERsion 2022
            </h5>
            <EventCarousel imageLinks={e1Data} />
            <div className="content flex flex-col md:w-[38rem] 5xl:w-[30rem] w-[90%] mx-auto">
              <p className="text-[#333333] text-[.9rem] 5xl:text-[1rem] lg:text-[1.1rem] text-justify">
                We conducted a coding event pairing with NITK's ACM-W chapter:
                RecHERsion - a all girl coding competition.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-5 mx-auto items-center justify-center">
            <h5 className="text-center text-xl md:text-2xl lg:text-[2rem] border-b-[3px] border-[#33769C] my-5 capitalize text-[#33769C] main__font w-fit">
              Orientation X Hour of Code Event 2022
            </h5>
            <EventCarousel imageLinks={e2Data} />
            <div className="content flex flex-col md:w-[38rem] 5xl:w-[30rem] w-[90%] mx-auto">
              <p className="text-[#333333] text-[.9rem] 5xl:text-[1rem] lg:text-[1.1rem] text-justify">
                A one-hour introduction to Computer Science to show that anybody
                can learn the basics of Computer Science targeted for 1st-year
                and 2nd-year BTechs.Encourage the audience to learn CS
                fundamentals and create interest in Computer
                Science.Inspirational Talk by a Phd student to walk through the
                daily life of researcher.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-5 mx-auto items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <h5 className="text-center text-xl md:text-2xl lg:text-[2rem] border-b-[3px] border-[#33769C] mt-5 capitalize text-[#33769C] main__font w-fit ">
                ACM India Student and Professional Chapter
              </h5>
              <h5 className="text-center text-xl md:text-2xl lg:text-[2rem] border-b-[3px] border-[#33769C] mb-5 capitalize text-[#33769C] main__font w-fit ">
                Summit 2023 held at IISER PUNE
              </h5>
            </div>
            <EventCarousel imageLinks={e3Data} />
            <div className="content flex flex-col md:w-[38rem] 5xl:w-[30rem] w-[90%] mx-auto">
              <p className="text-[#333333] text-[.9rem] 5xl:text-[1rem] lg:text-[1.1rem] text-justify">
                Exceptional platform for students to engage in thought-provoking
                discussions and expand their network. Presentations explored
                topics such as the significance of "The buzz around
                Computational Thinking," inspiring attendees to explore its
                potential.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-5 mx-auto items-center justify-center">
            <h5 className="text-center text-xl md:text-2xl lg:text-[2rem] border-b-[3px] border-[#33769C] my-5 capitalize text-[#33769C] main__font w-fit">
              Talk session by Prof Bhavana
            </h5>
            <EventCarousel imageLinks={e4Data} />
            <div className="content flex flex-col md:w-[38rem] 5xl:w-[30rem] w-[90%] mx-auto">
              <p className="text-[#333333] text-[.9rem] 5xl:text-[1rem] lg:text-[1.1rem] text-justify">
                ACM-W talk by Professor Bhavana Kanukurthi, a distinguished
                researcher and Professor of Cryptography at the Indian Institute
                of Science (IISc), Bangalore. The talk, titled "Navigating
                Uncertainty: A Researcher's Perspective", is aimed at students
                curious about research but need help figuring out where to start
                or what it entails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default events;
