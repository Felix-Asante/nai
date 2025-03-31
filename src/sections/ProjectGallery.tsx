"use client";

import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import Button from "@/components/Button";
import { useState } from "react";

type ProjectGalleryProps = {
  gallery: {
    _type: string;
    url: string;
    alt: string;
  }[];
};

export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const [galleryLimit, setGalleryLimit] = useState(10);
  if (!gallery || gallery.length === 0) {
    return null;
  }
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
      <Gallery>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {gallery.slice(0, galleryLimit).map((image, index) => {
            const url = image.url;
            const alt = image.alt;
            const isVideo = image._type === "video";
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
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                )}
              </Item>
            );
          })}
        </div>
      </Gallery>
      {galleryLimit < gallery.length && (
        <div className="mt-3">
          <Button
            onClick={() => setGalleryLimit((prev) => prev + 10)}
            size="sm"
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}
