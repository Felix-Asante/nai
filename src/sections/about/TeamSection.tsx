"use client";
import React from "react";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { TeamMember } from "@/types/sanity";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { urlFor } from "@/lib/sanity/sanity.image";

type Props = {
  teamMembers: TeamMember[];
};

export default function TeamSection({ teamMembers = [] }: Props) {
  const translate = useTranslations();
  if (teamMembers.length === 0) return null;

  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={translate("AboutPage.teamEyebrow")}
          title={translate("AboutPage.meetOurTeam")}
          description={translate("AboutPage.teamDescription")}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Reveal key={index} delay={(index % 4) * 0.08}>
              <article className="group card-surface card-hover h-full overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <Image
                    src={urlFor(member.image.url).url()}
                    alt={member.image?.alt || member.name}
                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                    width={400}
                    height={500}
                    placeholder={member?.image?.lqip ? "blur" : "empty"}
                    blurDataURL={member.image?.lqip || ""}
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-primary-700 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">{member.position}</p>
                  {member.socials && (
                    <div className="flex gap-3 mt-4">
                      {Object.entries(member.socials).map(([platform, link]) => (
                        <a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={translate(
                            "AboutPage.socialOnPlatform",
                            { name: member.name, platform }
                          )}
                          className="text-neutral-400 hover:text-primary-700 transition-colors"
                        >
                          <img
                            src={`/icons/${platform}.svg`}
                            alt=""
                            className="w-4 h-4 opacity-70 hover:opacity-100 transition"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
