"use client";
import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { type Gallery as GalleryType } from "@/types/sanity";

export default function GalleryList({ gallery }: { gallery: GalleryType[] }) {
  const [galleryLimit, setGalleryLimit] = useState(10);
  if (!gallery || gallery.length === 0) {
    return null;
  }
  return (
    <div>
      <Gallery>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
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
                width="1024"
                height="500"
                content={
                  isVideo ? (
                    <video autoPlay controls>
                      <source src={url} type="video/mp4" />
                    </video>
                  ) : undefined
                }
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    src={thumbnail}
                    alt={alt}
                    width={500}
                    height={500}
                    className="w-full h-full rounded-xl object-cover"
                    unoptimized
                  />
                )}
              </Item>
            );
          })}
        </div>
      </Gallery>

      {galleryLimit < gallery.length && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setGalleryLimit((prev) => prev + 10)}
            className="bg-primary-200 text-white px-4 py-2 rounded-md"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
