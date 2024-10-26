import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import styles from "./../../styles/skillsslider.module.css";
import data from "../../data/portfolio.json";
const skills = [
  {"name":"Laravel", "icon":"laravel.svg"},
  {"name":"vueJS", "icon":"vuejs.svg"},
  {"name":"Tailwind CSS", "icon":"tailwindcss.svg"},
  {"name":"PHP", "icon":"php.svg"},
  {"name":"WordPress", "icon":"wordpress.svg"},
  {"name":"Figma", "icon":"figma.svg"},
  {"name":"MySQL", "icon":"mysql.svg"},
  {"name":"Canvas Pro", "icon":"canvaspro.svg"},
  {"name":"Git", "icon":"git.svg"},
];

const SkillsSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      onMouseEnter={() => Swiper.autoplay.stop()}
      onMouseLeave={() => Swiper.autoplay.start()}
      loop={true}
    >
        <h2 className="skills-marquee flex mb-5 justify-center desktop:text-xl italic">{ data.skillsText }</h2>
      {skills.map((skill, index) => (
        <SwiperSlide key={index}>
          <img
            className="max-h-20 mt-2 mb-2 desktop:max-h-28 justify-center"
            src={`/images/${skill.icon}`}
          ></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default SkillsSlider;
