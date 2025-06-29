"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Where real estate meets real connection
            </h1>
            <p className="text-text-alternative md:text-md">
              Welcome to WISHKE, the innovative platform that transforms real
              estate into a vibrant social experience. Connect, collaborate, and
              transact with ease as you navigate through listings and engage
              with a community of real estate enthusiasts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Join">Join</Button>
              <Button title="Learn More" variant="secondary-alt">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
          className="size-full object-cover"
          alt="Modern luxury home exterior"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
