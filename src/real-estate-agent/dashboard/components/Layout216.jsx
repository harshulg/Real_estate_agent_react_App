"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout216() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Stats</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Your Real Estate Network at a Glance
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Stay updated with your activity and connections. Track your posts,
              followers, and interactions effortlessly.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  50%
                </h3>
                <p>Increase your connections and expand your network.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  50%
                </h3>
                <p>
                  Engage with your audience through meaningful interactions.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="View" variant="secondary">
                View
              </Button>
              <Button
                title="Refresh"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
