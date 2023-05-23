import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const EventCard = ({ instaLink, imgLink, title, info, date }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col 12xl:flex-row  p-5 shadow-md rounded-md gap-5 bg-gray-50 hover:-translate-y-2 transition-all 12xl:w-[35rem] 14xl:w-[40rem] mx-auto items-center 12xl:items-start">
      <img src={imgLink} alt="" className="w-[15rem] rounded-md" />
      <div className="flex flex-col gap-3 tracking-wider w-[20rem] text-black">
        <h3 className="font-semibold text-[1.2rem]">{title}</h3>
        <p className="text-[.95rem] text-left  line-clamp-2">{info}</p>
        <p className="text-[.9rem] text-black/70  ">{date}</p>
        <button
          onClick={() => router.push('/events')}
          className="btn btn-outline w-fit"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
