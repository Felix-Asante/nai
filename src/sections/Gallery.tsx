"use client";
import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { type Gallery as GalleryType } from "@/types/sanity";
import { cn } from "@/utils";
import { PlayCircleIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function GalleryList({ gallery }: { gallery: GalleryType[] }) {
  const [galleryLimit, setGalleryLimit] = useState(12);
  if (!gallery || gallery.length === 0) {
    return null;
  }
  return (
    <div>
      <Gallery>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {gallery.slice(0, galleryLimit).map((image, index) => {
            const url = image.url;
            const alt = image.alt;
            const isVideo = ["video", "file"].includes(image._type);
            const thumbnail = isVideo
              ? "/images/video-placeholder.png"
              : image.url;

            return (
              <Item
                key={index}
                original={url}
                thumbnail={thumbnail}
                width="1600"
                height="1000"
                content={
                  isVideo ? (
                    <video autoPlay controls>
                      <source src={url} type="video/mp4" />
                    </video>
                  ) : undefined
                }
              >
                {({ ref, open }) => (
                  <button
                    type="button"
                    onClick={open}
                    className={cn(
                      "group relative block w-full overflow-hidden rounded-2xl shadow-soft bg-neutral-200/50",
                      index % 5 === 0 ? "aspect-square md:row-span-2 md:aspect-[3/4]" : "aspect-square"
                    )}
                  >
                    <Image
                      ref={ref}
                      src={thumbnail}
                      alt={alt}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                      unoptimized
                    />
                    <div
                      className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/25 transition-colors"
                      aria-hidden
                    />
                    {isVideo && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <PlayCircleIcon className="w-12 h-12 drop-shadow-lg" />
                      </span>
                    )}
                  </button>
                )}
              </Item>
            );
          })}
        </div>
      </Gallery>

      {galleryLimit < gallery.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setGalleryLimit((prev) => prev + 12)}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6 h-12 border-primary-200 text-primary-700 hover:bg-primary-50"
            )}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
