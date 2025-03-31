import React from "react";
import { getGallery } from "@/lib/sanity/api";
import MainNavbar from "@/components/navbars/MainNavbar";
import GalleryList from "@/sections/Gallery";
import Container from "@/components/layouts/Container";
import GalleryHeader from "@/sections/about/gallery/GalleryHeader";
import { HeartPulseIcon } from "lucide-react";
import Button from "@/components/Button";

export default async function GalleryPage() {
  const gallery = await getGallery();
  return (
    <div>
      <MainNavbar />
      <Container className="mt-12 mb-16">
        <GalleryHeader />
        <GalleryList gallery={gallery} />
        <div className="mt-16 p-6 2xl:p-10 rounded-xl bg-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Make a Difference Today
          </h1>
          <p>
            Your support enables us to continue our vital work around the world.
          </p>
          <p>
            Every donation, no matter the size, helps us create lasting change
            in communities facing challenges.
          </p>
          <ul className="space-y-2 my-5">
            <li className="flex items-start gap-2">
              <HeartPulseIcon className="h-5 w-5 mt-0.5 text-secondary" />
              <span>Support sustainable development projects</span>
            </li>
            <li className="flex items-start gap-2">
              <HeartPulseIcon className="h-5 w-5 mt-0.5 text-secondary" />
              <span>Provide emergency relief to those in need</span>
            </li>
            <li className="flex items-start gap-2">
              <HeartPulseIcon className="h-5 w-5 mt-0.5 text-secondary" />
              <span>Empower communities through education and resources</span>
            </li>
          </ul>
          <Button
            variant="secondary"
            className="font-bold bg-secondary-200"
            size="lg"
          >
            Donate Now
          </Button>
        </div>
      </Container>
    </div>
  );
}
