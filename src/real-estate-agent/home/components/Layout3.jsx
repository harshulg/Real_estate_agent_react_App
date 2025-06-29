"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Connect seamlessly with direct chat and collaboration tools for
              real estate.
            </h1>
            <p className="md:text-md">
              Experience real-time communication with our integrated chat
              feature. Collaborate effortlessly with peers and clients to
              enhance your real estate journey.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
              className="w-full rounded-image object-cover"
              alt="Modern real estate exterior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
