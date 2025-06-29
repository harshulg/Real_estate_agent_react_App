"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Welcome</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Your Activity Hub
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Stay updated with your latest interactions and notifications.
              Access your favorite features quickly and effortlessly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="View">View</Button>
              <Button title="Settings" variant="secondary">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
