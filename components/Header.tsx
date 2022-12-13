import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState<Boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div className="flex top-0 relative items-center w-full">
      <nav className="bg-gray-200 w-screen p-2">
        <div className="md:justify-center mx-auto md:px-0">
          <div className="flex items-center justify-between md:justify-center h-14">
            <div className="flex items-center justify-between w-11/12 ">
              <div className="cursor-pointer font-semibold text-4xl flex-shrink-0">
                <Link href="/">
                  <img
                    src="/gleanassist.png"
                    alt="gleanassist"
                    className="absolute w-10 top-6 left-28"
                  />
                  <h1 className="font-bold text-4xl text-twitter z-10">
                    GleanAssist
                  </h1>
                  <p className="text-sm italic font-extralight font-sans">
                    live better, the smart choice
                  </p>
                </Link>
              </div>
              <div className="flex items-center text-xl md:text-lg lg:text-xl">
                <div className="hidden md:float-left md:contents">
                  <Link href="/BlogPage">
                    <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      Blog
                    </span>
                  </Link>
                  <Link href="/AllJobsUpdates">
                    <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      Job Updates
                    </span>
                  </Link>
                  {/* <Link href="/ResourcesPage">
                    <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      Resources
                    </span>
                  </Link> */}
                  <Link href="/SellAndBuy">
                    <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      Sell & Buy
                    </span>
                  </Link>
                  <Link href="/UpcomingEvents">
                    <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                      Upcoming Events
                    </span>
                  </Link>
                </div>
                <div className="flex gap-2">
                  <div>
                    <button
                      type="button"
                      className="cart-icon"
                      onClick={() => setShowCart(true)}
                    >
                      <AiOutlineShopping />
                      <span className="cart-item-qty">{totalQuantities}</span>
                    </button>

                    {showCart && <Cart />}
                  </div>
                  <div
                    className="block m-2 text-xl"
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    {showSidebar ? <ImCancelCircle /> : <AiOutlineSearch />}
                  </div>
                  {showSidebar && (
                    <div className=" ">
                      <div className="absolute left-0 z-10 items-center flex">
                        <form
                          onSubmit={handleSearch}
                          className="absolute -top-2 md:-top-2 flex items-center"
                        >
                          <input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[250px] md:w-[350px] rounded-full  md:top-0"
                            placeholder="Search Uquicks"
                          />
                          <button
                            onClick={handleSearch}
                            className="absolute right-3  border-1-2 border-gray-300 text-2xl text-gray-400"
                          >
                            <BiSearch />
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-1 px-3 py-2 text-base font-semibold cursor-pointer rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/UquicksBlog" onClick={() => setIsOpen(!isOpen)}>
                  <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    Blog
                  </span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href="/AllJobsUpdates">
                  <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    Job Updates
                  </span>
                </Link>
                {/* <Link onClick={() => setIsOpen(!isOpen)} href="/ResourcesPage">
                  <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    Resources
                  </span>
                </Link> */}
                <Link onClick={() => setIsOpen(!isOpen)} href="/SellAndBuy">
                  <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    Sell & Buy
                  </span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href="/UpcomingEvents">
                  <span className="text-black hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md font-semibold cursor-pointer">
                    Upcoming Events
                  </span>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
