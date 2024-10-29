import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import data from "../../data/portfolio.json";
import Image from "next/image";

const skills = [
  { name: "Laravel", icon: "laravel.svg" },
  { name: "VueJS", icon: "vuejs.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss.svg" },
  { name: "PHP", icon: "php.svg" },
  { name: "WordPress", icon: "wordpress.svg" },
  { name: "Figma", icon: "figma.svg" },
  { name: "MySQL", icon: "mysql.svg" },
  { name: "Canvas Pro", icon: "canvaspro.svg" },
  { name: "Git", icon: "git.svg" },
];

const SkillsSlider = () => {
  return (
    <div className="skills-slider-container">
      <h2 className="skills-marquee flex mb-5 justify-center text-xl italic">
        {data.skillsText}
      </h2>
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} aria-label={`Skill in ${skill.name}`}>
            <Image
              className="max-h-20 mt-2 mb-2 desktop:max-h-28 justify-center"
              src={`/images/${skill.icon}`}
              alt={`${skill.name} logo`}
              width={100}
              height={100}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsSlider;
