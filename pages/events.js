import React from "react";
import Events from "../components/Events";

const events = () => {
  return (
    <div>
      <h2 className="text-center text-2xl lg:text-3xl p-5">Events</h2>
      <Events
        heading="RecHERsion 2022:"
        small_disc={
          "an all girls coding contest in collaboration with ACMW-NITK, ACMW-UC Santa Cruz, and WIE-University of Porto"
        }
        i_link={
          "https://res.cloudinary.com/dbmw0xoar/image/upload/v1668541971/ecell/ACM-W/acm_event1_drbadi.jpg"
        }
        reference={
          "https://www.instagram.com/p/Ck8V9gnoKNY/?utm_source=ig_web_copy_link"
        }
      />
    </div>
  );
};

export default events;
