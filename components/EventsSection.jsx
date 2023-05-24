import React from 'react';
import EventCard from './EventCard';

const EventsSection = () => {
  return (
    <div className="pt-[5rem] pb-[8rem] flex flex-col items-center justify-center border-b-2 border-black/10 w-fit mx-auto 8xl:px-10">
      <h2 className="uppercase text-[2rem] lg:text-[2.3rem]  tracking-wider text-[#33769C]  main__font my-10">
        What&apos;s Happening
      </h2>
      <div className="grid 8xl:grid-cols-2 mx-auto gap-5">
        <EventCard
          instaLink="https://www.instagram.com/p/Ck8V9gnoKNY/?utm_source=ig_web_copy_link"
          imgLink="https://res.cloudinary.com/dbmw0xoar/image/upload/v1668541971/ecell/ACM-W/acm_event1_drbadi.jpg"
          title="RecHERsion 2022"
          info="An all girls coding contest in collaboration with ACMW-NITK, ACMW-UC
        Santa Cruz, and WIE-University of Porto"
          date="December 4th 2022"
        />
        <EventCard
          instaLink=""
          imgLink="https://res.cloudinary.com/dbmw0xoar/image/upload/v1684838741/ecell/ACM-W/Screenshot_from_2023-05-23_16-13-39_uuhzfa.png"
          title="Orientation X Hour of Code Event 2022"
          info={`A one-hour introduction to Computer Science to show that anybody can learn the
        basics of Computer Science targeted for 1st-year and 2nd-year BTechs.Encourage the audience to learn CS fundamentals and create interest in Computer Science.Inspirational Talk by a Phd student to walk through the daily
        life of researcher.`}
          date="December 8th 2022"
        />
        <EventCard
          instaLink=""
          imgLink="https://res.cloudinary.com/dbmw0xoar/image/upload/v1684840332/ecell/ACM-W/Screenshot_from_2023-05-23_16-40-55_iqlhpr.png   "
          title="ACM India Student and Professional Chapter Summit 2023 held at IISER PUNE"
          info={` It provided a platform for students to engage in thought-provoking discussions and expand their network.  An innovative initiative aimed at accelerating scientific discovery emphasized collaboration and interdisciplinary approaches. Networking opportunities with diverse individuals fostered camaraderie, while a panel discussion equipped attendees with valuable insights on graduating student's readiness for the real world.`}
          date="January 20-21st 2023"
        />
        <EventCard
          instaLink="https://www.instagram.com/p/Cq8LwRlJvts/"
          imgLink="https://res.cloudinary.com/dbmw0xoar/image/upload/v1684839490/ecell/ACM-W/acmw_taLK_1_o6lmaf.jpg"
          title=" Talk session by Prof Bhavana"
          info={`ACM-W talk by Professor Bhavana Kanukurthi, a distinguished researcher and Professor of Cryptography at the Indian Institute of Science (IISc), Bangalore. The talk, titled "Navigating Uncertainty: A Researcher's Perspective", is aimed at students curious about research but need help figuring out where to start or what it entails.`}
          date="April 13th 2023"
        />
      </div>
    </div>
  );
};

export default EventsSection;
