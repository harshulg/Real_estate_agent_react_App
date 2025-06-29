import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <section className="z-[999] flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="/">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              <Button className="w-full px-4 py-1" title="Join" size="sm">
                Join
              </Button>
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={toggleMobileMenu}
            >
              <span className="my-[3px] h-0.5 w-6 bg-black" />
              <span className="my-[3px] h-0.5 w-6 bg-black" />
              <span className="my-[3px] h-0.5 w-6 bg-black" />
            </button>
          </div>
        </div>
        <div className={`overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2">
            Home
          </Link>
          <Link to="/properties" className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2">
            Properties
          </Link>
          <Link to="/connect" className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2">
            Connect
          </Link>
          <div className="relative">
            <button
              className="flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base"
              onClick={toggleDropdown}
            >
              <span>More Info</span>
              <span className={`transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {isDropdownOpen && (
              <div className="bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2">
                <Link to="/blog" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                  Blog
                </Link>
                <Link to="/support" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                  Support
                </Link>
                <Link to="/about" className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left">
                  About Us
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="hidden justify-self-end lg:block">
          <Button className="px-6 py-2" title="Join" size="sm">
            Join
          </Button>
        </div>
      </div>
    </section>
  );
}
