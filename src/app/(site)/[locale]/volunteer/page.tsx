import Container from "@/components/layouts/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import VolunteerApplicationForm from "@/sections/volunteer/VolunteerApplicationForm";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalendarCheck2Icon,
  CheckCircle2Icon,
  ClipboardListIcon,
  HandHeartIcon,
  HeartPulseIcon,
  MailIcon,
  MegaphoneIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";

export const metadata = {
  title: "Careers & Volunteers — Noble Alms International",
  description:
    "Work with purpose at Noble Alms International. Explore careers, volunteer opportunities and ways to contribute your skills to our charitable mission.",
};

type SkillItem = {
  title: string;
  Icon: typeof BookOpenIcon;
};

const skills: SkillItem[] = [
  { title: "Education and youth development", Icon: BookOpenIcon },
  { title: "Healthcare and community outreach", Icon: HeartPulseIcon },
  { title: "Administration and coordination", Icon: ClipboardListIcon },
  { title: "Communications and advocacy", Icon: MegaphoneIcon },
  { title: "Fundraising and partnerships", Icon: HandHeartIcon },
  { title: "Event planning and support", Icon: CalendarCheck2Icon },
];

const volunteerOpportunities = [
  "Supporting education and outreach programs",
  "Assisting in health and community initiatives",
  "Helping with events and campaigns",
  "Administrative and field support",
];

export default function CareersAndVolunteersPage() {
  return (
    <main>
      <PageHero
        eyebrow="👥 Careers & Volunteers"
        title={
          <span className="inline-flex items-baseline gap-3 flex-wrap">
            <span aria-hidden className="text-3xl md:text-4xl">
              💙
            </span>
            Work with purpose at Noble Alms International
          </span>
        }
        description="Your skills, passion and dedication can directly help transform lives in communities through education, healthcare and humanitarian support."
        image="/images/img-20.jpg"
      >
        <Link
          href="#register"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 shadow-lg shadow-secondary/30"
          )}
        >
          <HandHeartIcon className="w-4 h-4" />
          Register now
        </Link>
        <Link
          href="#roles"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700"
          )}
        >
          See open roles
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </PageHero>

      {/* Intro */}
      <section className="section-y bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow justify-center">
              Work with purpose
            </span>
            <h2 className="mt-4 headline text-primary-700">
              Every role plays a vital part in creating lasting impact
            </h2>
            <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed text-neutral-600">
              <p>
                At Noble Alms International, your skills, passion, and
                dedication can directly contribute to transforming lives in
                communities through education, healthcare, and humanitarian
                support.
              </p>
              <p>
                As a registered charitable organization in Canada, we believe
                that every role — whether professional or volunteer — plays a
                vital part in creating meaningful and lasting impact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Join Our Mission + Open Roles */}
      <section id="roles" className="section-y bg-neutral-200/40 scroll-mt-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="🌍 Join our mission"
            title="Skills we welcome"
            description="We welcome individuals who are passionate about community development and social impact. Whether you come from the nonprofit sector or bring skills from another field, there are meaningful ways to contribute."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => {
              const Icon = skill.Icon;
              return (
                <Reveal key={skill.title} delay={(i % 3) * 0.08}>
                  <div className="card-surface card-hover h-full p-6 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-700">
                        {skill.title}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Open Roles callout */}
          <Reveal delay={0.2}>
            <div className="mt-12 card-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary-700 text-lg">
                  Open roles
                </h3>
                <p className="mt-1 text-sm md:text-base text-neutral-600 leading-relaxed">
                  We currently have no active openings. New opportunities are
                  posted here as they open — register your interest below and
                  we&apos;ll reach out when a matching role becomes available.
                </p>
              </div>
              <Link
                href="#register"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-5 h-11 bg-primary-700 hover:bg-primary-800 text-white shrink-0"
                )}
              >
                Register your interest
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Volunteer Opportunities */}
      <section className="section-y bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow="🙌 Volunteer opportunities"
                title="Give time, create real change"
                description="Join a growing network of individuals who dedicate their time and energy to supporting our programs."
              />

              <ul className="mt-8 space-y-3">
                {volunteerOpportunities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base md:text-lg text-neutral-700"
                  >
                    <CheckCircle2Icon className="w-5 h-5 text-primary-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm md:text-base text-neutral-600 leading-relaxed">
                Whether online or in-person, your time makes a real difference.
              </p>

              <div className="mt-8">
                <Link
                  href="#register"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30"
                  )}
                >
                  <HandHeartIcon className="w-4 h-4" />
                  Register now
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-6">
              <div className="relative">
                <div
                  className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl bg-primary-100 hidden md:block"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl bg-secondary/15 hidden md:block"
                  aria-hidden
                />
                <img
                  src="/images/img-21.jpg"
                  alt="Volunteers supporting community initiatives"
                  className="relative w-full rounded-3xl shadow-elevated object-cover aspect-[4/3]"
                />
              </div>
            </Reveal>
          </div>

          {/* Who Can Volunteer — compact inline block */}
          <Reveal delay={0.2}>
            <div className="mt-14 max-w-4xl mx-auto card-surface p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <UsersIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-primary-700">
                  Who can volunteer
                </p>
                <p className="mt-1 text-sm md:text-base text-neutral-600 leading-relaxed">
                  We welcome students, professionals and anyone passionate
                  about helping others. No experience needed — just commitment
                  and willingness to help.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="section-y bg-white pb-0">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient text-white">
            <div
              className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.25),transparent_60%)]"
              aria-hidden
            />
            <div className="relative p-8 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="💙 Why join us?"
                  tone="light"
                  title="Make a real difference with people who care"
                  description="Join Noble Alms International to contribute your skills, support meaningful change and work alongside passionate individuals committed to improving lives in Canada and beyond."
                />
              </div>

              <div className="lg:col-span-5 grid sm:grid-cols-2 gap-3">
                {[
                  {
                    Icon: SparklesIcon,
                    label: "Contribute meaningful skills",
                  },
                  {
                    Icon: UsersIcon,
                    label: "Join a passionate community",
                  },
                  {
                    Icon: HandHeartIcon,
                    label: "Support lasting change",
                  },
                  {
                    Icon: CheckCircle2Icon,
                    label: "Registered Canadian charity",
                  },
                ].map((item) => {
                  const Icon = item.Icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 ring-1 ring-white/15 p-4"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Registration / Application */}
      <section
        id="register"
        className="section-y bg-white scroll-mt-24"
      >
        <Container>
          <SectionHeading
            align="center"
            eyebrow="📩 Register"
            title="Register to volunteer"
            description="Fill in the form below. After submitting, our team will review your information and contact you when the right opportunity opens up."
          />

          <Reveal className="mt-12 max-w-3xl mx-auto">
            <div className="card-surface p-6 md:p-10">
              <VolunteerApplicationForm />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <MailIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-primary-700">
                  Questions about joining?
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Our team is happy to help. Reach out and we&apos;ll get back
                  to you.
                </p>
              </div>
              <a
                href="mailto:info@noblealmsinternational.com"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-5 h-11 border-primary-200 text-primary-700 hover:bg-primary-50"
                )}
              >
                info@noblealmsinternational.com
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
