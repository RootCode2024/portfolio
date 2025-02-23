import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Image from "next/image";

// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Vérifie si la route actuelle est "/contact"
  const isContactPage = router.pathname === "/contact";

  return (
    <>
      <Popover className="block tablet:hidden mt-3">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-1 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                <Image
                  className="h-8 w-8"
                  src={`/images/${
                    theme === "dark" ? "white_logo.png" : "dark_logo.png"
                  }`}
                  width="50"
                  height="50"
                />
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} width="28" height="28" />
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    width="28"
                    height="28"
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  {/* Cache les boutons "Works" et "About" si on est sur la page "Contact" */}
                  {!isContactPage && (
                    <>
                      <Button onClick={handleWorkScroll}>Works</Button>
                      <Button onClick={handleAboutScroll}>About</Button>
                    </>
                  )}
                  {isContactPage && (
                    <>
                      <Button onClick={() => router.push("/")} classes="first:ml-1">
                        Home
                      </Button>
                    </>
                  )}

                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                       router.push("/resume")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => router.push("/contact")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => router.push("/contact")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          <Image
            className="h-12"
            src={`/images/${
              theme === "dark" ? "white_logo.png" : "dark_logo.png"
            }`}
            width="50" height="50"
          />
        </h1>
        {!isBlog ? (
          <div className="flex">
            {/* Cache les boutons "Works" et "About" si on est sur la page "Contact" */}
            {!isContactPage && (
              <>
                <Button onClick={handleWorkScroll}>Works</Button>
                <Button onClick={handleAboutScroll}>About</Button>
              </>
            )}
            {isContactPage && (
              <>
                <Button onClick={() => router.push("/")} classes="first:ml-1">
                  Home
                </Button>
              </>
            )}
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => router.push("/contact")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
              <Image className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} width="28" height="28" />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => router.push("/contact")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} width="28" height="28" />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
