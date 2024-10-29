import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import SkillsSlider from "../components/SkillsSlider";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from "next/image";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Refs for scroll and animation
  const workRef = useRef();
  const skillsSlider = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Smooth scroll handlers
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // Trigger animations
  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Chrislain AVOCEGAN - Développeur Web Full Stack</title>
        <meta name="description" content="Portfolio de Chrislain AVOCEGAN, développeur web full stack spécialisé en Laravel, PHP, Vue.js, Tailwind CSS et WordPress." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Chrislain AVOCEGAN - Développeur Web Full Stack" />
        <meta property="og:description" content="Portfolio de Chrislain AVOCEGAN, créateur de solutions web modernes et optimisées." />
        <meta property="og:image" content="/images/portfolio-preview.png" />
        <meta property="og:url" content="https://chrislainavocegan.site" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Chrislain AVOCEGAN",
              jobTitle: "Développeur Web Full Stack",
              url: "https://chrislainavocegan.site",
              sameAs: [
                "https://github.com/RootCode2024",
                "https://linkedin.com/in/chrislain-avocegan-314273315",
              ],
            }),
          }}
        />
      </Head>
      
      <div className={`relative ${data.showCursor ? "cursor-none" : ""}`}>
        {data.showCursor && <Cursor />}
        
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>

        <div className="container mx-auto mb-10">
          <Header handleWorkScroll={handleWorkScroll} handleAboutScroll={handleAboutScroll} />

          <div className="w-full desktop:flex desktop:flex-row items-center laptop:mt-20 mt-10">
            <div className="desktop:w-3/5">
              <div className="mt-5">
                <h1 ref={textOne} className="text-4xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
                  {data.headerTaglineOne}
                </h1>
                <h1 ref={textTwo} className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5">
                  {data.headerTaglineTwo}
                </h1>
                <h1 ref={textThree} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5">
                  {data.headerTaglineThree}
                </h1>
              </div>

              <Socials className="mt-2 laptop:mt-5" />
            </div>

            <div className="mt-10 flex justify-center desktop:w-2/5">
              <Image src={data.myPhoto} alt={data.name} width="350" height="350" layout="responsive" className="w-3/5 tablet:w-4/5 laptop:w-3/5" />
            </div>
          </div>

          {/* <div className="mt-10 laptop:mt-30 mb-10 laptop:mb-30 p-2 laptop:p-0" ref={skillsSlider}>
            <h1 className="text-2xl desktop:text-4xl text-bold">Skills.</h1>
            <hr />
            <SkillsSlider />
          </div> */}

          <div className="mt-10 laptop:mt-30 mb-10 laptop:mb-30 p-2 laptop:p-0" ref={workRef}>
            <h1 className="text-2xl desktop:text-4xl text-bold">Works.</h1>
            <hr />
            <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
              {data.projects.map((project) => (
                <WorkCard key={project.id} img={project.imageSrc} name={project.title} description={project.description} onClick={() => window.open(project.url)} />
              ))}
            </div>
          </div>

          <div className="mt-10 laptop:mt-30 mb-10 laptop:mb-30 p-2 laptop:p-0">
            <h1 className="text-2xl desktop:text-4xl text-bold">Services.</h1>
            <hr />
            <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} backgroundImage={service.backgroundImage} />
              ))}
            </div>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="fixed bottom-5 right-5">
              <Link href="/edit">
                <Button type="primary">Edit Data</Button>
              </Link>
            </div>
          )}

          <div className="w-full" ref={aboutRef}>
            <h1 className="text-2xl desktop:text-4xl text-bold">About.</h1>
            <hr />
            <div className="laptop:flex">
              <div className="laptop:w-2/6 tablet:m-10 laptop:mt-2 mx-auto w-10/12">
                <Image src={data.aboutImage} alt="About Image" width="530" height="530" layout="responsive" />
              </div>
              <div className="desktop:w-4/6 px-5 laptop:px-0">
                <p className="tablet:m-10 mt-2 text-lg laptop:text-2xl text-justify">
                  {data.aboutpara}
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
