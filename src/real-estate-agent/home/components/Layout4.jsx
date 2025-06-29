"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Engage</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Post, Match, Connect, and Collaborate Effortlessly
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              WISHKE transforms real estate interactions with dynamic posting
              features. Share properties, requirements, and updates in
              real-time.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Create Posts
                </h6>
                <p>
                  Easily create posts for properties, events, and more to engage
                  your network.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Smart Matching
                </h6>
                <p>
                  Our intelligent system connects your requirements with
                  available properties seamlessly.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073"
              className="w-full rounded-image object-cover"
              alt="Real estate agent showing property to clients"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
