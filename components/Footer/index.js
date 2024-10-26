import React from "react";
import Socials from "../Socials";
import CalendlyWidget from "../CalendlyWidget";


const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
        <h1 className="text-2xl desktop:text-4xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <CalendlyWidget />
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        <p>&copy; 2024 Chrislain AVOCEGAN | All Rights Reserved.</p>
      </h1>
    </>
  );
};

export default Footer;
