"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Experience a vibrant social feed tailored for real estate
            connections.
          </h3>
          <p className="md:text-md">
            Stay updated with a dynamic timeline that showcases the latest
            properties, projects, and events. Connect with like-minded
            individuals and professionals in the real estate sector. Utilize
            advanced filters to find exactly what you need, enhancing your
            networking and transaction opportunities.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070"
            className="w-full rounded-image object-cover"
            alt="Modern real estate interior"
          />
        </div>
      </div>
    </section>
  );
}
