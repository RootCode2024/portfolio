import React from "react";
import Button from "../Button";
import Image from "next/image";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <Image
            className="h-6"
            src={social.icon}
            alt={social.title}
            width="26" height="26"
          />
        </Button>
      ))}
    </div>
  );
};

export default Socials;
