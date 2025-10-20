"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";

export function Banners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="relative container mx-auto px-4 my-20">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <Banner title="Birds Be Good Yours" />
            </div>
            <div className="embla__slide">
              <Banner title="What the Hell!" />
            </div>
            <div className="embla__slide">
              <Banner title="Lorem Ipsum Dollars" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full translate-y-[50%]">
          <div className="flex items-center justify-between">
            <button
              className="embla__next border border-gray-200 bg-gray-200/30 h-12 w-12 flex items-center justify-center rounded-full cursor-pointer hover:border-amber-900/60 hover:bg-gray-200 transition-all ease-in-out duration-300"
              onClick={scrollPrev}
            >
              <ArrowLeft className="text-gray-400" />
            </button>
            <button
              className="embla__next border border-gray-200 bg-gray-200/30 h-12 w-12 flex items-center justify-center rounded-full cursor-pointer hover:border-amber-900/60 hover:bg-gray-200 transition-all ease-in-out duration-300"
              onClick={scrollNext}
            >
              <ArrowRight className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Banner = ({ title }: { title: string }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-5 grid-x-0 md:grid-x-10">
      <div className="col-span-3 w-full md:w-[70%] order-2 md:order-1">
        <h2 className="text-3xl md:text-[4.5rem] leading-[1.4] font-semibold mb-7">
          {title}
        </h2>
        <h4 className="text-lg leading-[1.8] mb-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          adipisci sequi tempore vel cum repudiandae sit quis, id molestiae
          nulla?
        </h4>
        <div>
          <a
            href="#"
            className="inline-flex border px-8 py-2 items-center justify-center gap-2 uppercase font-bold transition-all ease-in-out duration-300 hover:gap-4"
          >
            Read More
            <MoveRight size={18} />
          </a>
        </div>
      </div>
      <div className="col-span-2 order-1 md:order-2">
        <Image
          src="https://demo.templatesjungle.com/booksaw/images/product-item1.jpg"
          alt="book"
          width={400}
          height={600}
          className="max-h-[600px]"
        />
      </div>
    </div>
  );
};
