"use client";

import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaCirclePlay } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full cursor-pointer ${
      current === index + 1 ? "bg-black" : "bg-gray-300"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial16() {
  const carousel = useCarousel();
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <Carousel
          setApi={carousel.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden"
        >
          <div className="relative pt-20 md:pt-0 md:pb-20">
            <CarouselContent className="ml-0">
              <CarouselItem className="pl-0">
                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                  <div className="order-last md:order-first">
                    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
                        alt="Professional real estate agent John Doe"
                        className="size-full object-cover"
                      />
                      <span className="absolute inset-0 z-10 bg-black/50" />
                      <FaCirclePlay className="absolute z-20 size-16 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-6 flex md:mb-8">
                      <BiSolidStar className="size-6 text-yellow-400" />
                      <BiSolidStar className="size-6 text-yellow-400" />
                      <BiSolidStar className="size-6 text-yellow-400" />
                      <BiSolidStar className="size-6 text-yellow-400" />
                      <BiSolidStar className="size-6 text-yellow-400" />
                    </div>
                    <blockquote className="text-xl font-bold md:text-2xl">
                      "WISHKE has transformed the way I connect with potential
                      buyers. It's not just about listings; it's about building
                      relationships in real estate."
                    </blockquote>
                    <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p>Realtor, Dream Homes</p>
                      </div>
                      <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
                      <div>
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                          alt="Webflow logo 1"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0">
                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                  <div className="order-last md:order-first">
                    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976"
                        alt="Professional real estate agent Jane Smith"
                        className="size-full object-cover"
                      />
                      <span className="absolute inset-0 z-10 bg-black/50" />
                      <FaCirclePlay className="absolute z-20 size-16 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-6 flex md:mb-8">
                      <BiSolidStar className="size-6 text-yellow-400" />
                      <BiSolidStar className="size-6 text-yellow-400" />
                      <BiSolidStar className="size-6 text-yellow-400" />
                      <BiSolidStar className="size-6 text-yellow-400" />
                      <BiSolidStar className="size-6 text-yellow-400" />
                    </div>
                    <blockquote className="text-xl font-bold md:text-2xl">
                      "The platform's intuitive design makes it easy to showcase properties and connect with clients. A game-changer for real estate professionals."
                    </blockquote>
                    <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                      <div>
                        <p className="font-semibold">Jane Smith</p>
                        <p>Real Estate Agent, Prime Properties</p>
                      </div>
                      <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
                      <div>
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                          alt="Webflow logo 2"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute top-0 flex w-full items-start justify-between md:top-auto md:bottom-0 md:items-end">
              <div className="mt-2.5 flex w-full items-start justify-start md:mt-0 md:mb-2.5">
                <button
                  onClick={carousel.handleDotClick(0)}
                  className={carousel.dotClassName(0)}
                  aria-label="Go to slide 1"
                />
                <button
                  onClick={carousel.handleDotClick(1)}
                  className={carousel.dotClassName(1)}
                  aria-label="Go to slide 2"
                />
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <CarouselPrevious className="static top-0 right-0 size-12 -translate-y-0 hover:bg-gray-100" />
                <CarouselNext className="static top-0 right-0 size-12 -translate-y-0 hover:bg-gray-100" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
