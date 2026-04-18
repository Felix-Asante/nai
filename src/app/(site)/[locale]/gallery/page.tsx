import React from "react";
import { getGallery } from "@/lib/sanity/api";
import GalleryList from "@/sections/Gallery";
import Container from "@/components/layouts/Container";
import GalleryHeader from "@/sections/about/gallery/GalleryHeader";
import GalleryImpactBanner from "@/sections/about/gallery/GalleryImpactBanner";

export default async function GalleryPage() {
  const gallery = await getGallery();
  return (
    <main>
      <GalleryHeader />

      <section className="section-y bg-white">
        <Container>
          <GalleryList gallery={gallery} />
        </Container>
      </section>

      <GalleryImpactBanner />
    </main>
  );
}
