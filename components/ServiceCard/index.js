import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ title, description, backgroundImage }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 relative overflow-hidden ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: `20%`,
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 text-white">
        <h1 className="text-3xl">{title || "Heading"}</h1>
        <p className="mt-5 text-xl">
          {description ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-80 z-0" />
    </div>
  );
};

export default ServiceCard;
