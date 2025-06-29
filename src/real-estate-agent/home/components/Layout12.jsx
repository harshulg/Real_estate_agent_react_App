"use client";

import React from "react";

export function Layout12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Experience real-time property matching for seamless real estate
              connections.
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              WISHKE revolutionizes how you find properties by connecting buyers
              and sellers instantly. Our platform ensures that your real estate
              needs are met in real-time, making the process efficient and
              engaging.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Instant Connections
                </h6>
                <p>
                  Match with properties that fit your criteria and preferences
                  effortlessly.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Smart Matching
                </h6>
                <p>
                  Utilize our advanced algorithms for precise property
                  recommendations tailored to you.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
              className="w-full rounded-image object-cover"
              alt="Modern interior of a luxury home"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
