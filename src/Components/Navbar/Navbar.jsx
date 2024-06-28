import React, { useState } from "react";
import Logo from "../../assets/Cup_Coffe.png";

import { IoIosSearch } from "react-icons/io";
import { TfiBag } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const Menus = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "services",
      link: "#services",
    },
    {
      id: 3,
      name: "About",
      link: "#about",
    },
  ];

  // Sidebar function

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" text-gray-500 bg-[#F2F1EF]">
      <div className="container py-2">
        <div className="flex  items-center gap-4 md:justify-between">
          {/* Hamburger menu  */}

          <div
            onClick={handleNav}
            className="cursor-pointer block md:hidden z-50 right-5 top-5 fixed "
          >
            {!nav ? (
              <div className=" cursor-pointer text-2xl  p-1">
                <RxHamburgerMenu />
              </div>
            ) : (
              <div className=" cursor-pointer text-2xl z-50 text-secondary  p-1">
                <RxCross2 />
              </div>
            )}
          </div>

          {/* Hidden Sidebar  */}

          <div
            className={
              nav
                ? "bg-white z-50  py-10 px-5 fixed left-0 top-0 h-full w-[50%]  md:hidden ease-in-out duration-700  lg:left-[-100%]"
                : "lg:left-[-100%] fixed left-[-100%] ease-in-out duration-1000 h-full w-[60%] top-0 "
            }
          >
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-28 md:w-32  hover:scale-105 duration-500 ease-in-out cursor-pointer"
                />
              </div>
              <ul className="flex flex-col items-center  gap-2">
                {Menus.map((data, index) => (
                  <li
                    key={index}
                    className=" border-b border-b-coral-red last:border-0 w-full"
                  >
                    <a
                      href={data.link}
                      className="inline-block text-base  py-4 px-14 text-gray-500 hover:text-primary duration-200 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links section     */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="sm:flex justify-between items-center gap-4 hidden "
          >
            <ul className="hidden  md:flex items-center gap-2">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-lg py-4 px-4 text-gray-500 hover:text-primary duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo section  */}
          <div data-aos="fade-down" data-aos-once="true">
            <img
              src={Logo}
              alt="Logo"
              className="w-20 md:w-28  hover:scale-105 duration-500 ease-in-out cursor-pointer"
            />
          </div>

          {/* user section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            className="md:flex hidden justify-between
           gap-6"
          >
            <button className="   bg-white rounded-full hover:scale-105 duration-200 flex text-gray-500 items-center ">
              <IoIosSearch className="text-xl  my-1 mx-2 cursor-pointer" />
            </button>
            <button className=" rounded-full hover:scale-105 duration-200 flex  items-center ">
              <TfiBag className="text-xl cursor-pointer" />
            </button>

            <button className=" rounded-full hover:scale-105 duration-200  flex  items-center ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
