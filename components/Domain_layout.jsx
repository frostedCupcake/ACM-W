import React from "react";
import Team_card from "./Team_card";

const Domain_layout = ({ data, domain }) => {
  return (
    <div className="sm:w-[30rem]  md:w-[50rem] mx-auto py-10 text-center ">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl uppercase">
        {domain}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {data.map((item) => (
          <Team_card
            name={item.name}
            designation={item.designation}
            i_link={item.i_link}
            p_link={item.p_link}
            info={item.info}
            key={item.name}
            role={item.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Domain_layout;
