import { Formats, TranslationValues } from "next-intl";

type Translator = (
  key: any,
  values?: TranslationValues,
  formats?: Formats
) => string;

export const navbarRoutes = (translate: Translator) => [
  {
    name: translate("Navbar.aboutUs"),
    href: "/about-us",
  },
  // {
  //   name: "Our Mission",
  //   href: "/our-mission",
  // },
  {
    name: translate("Navbar.projects"),
    href: "/projects",
  },
  // {
  //   name: "Get Involved",
  //   href: "/get-involved",
  // },
  {
    name: translate("Navbar.contactUs"),
    href: "/contact-us",
  },
  {
    name: translate("Navbar.gallery"),
    href: "/gallery",
  },
];

export const footerRoutes = (translate: Translator) => [
  {
    name: translate("Navbar.aboutUs"),
    href: "/about-us",
  },
  // {
  //   name: "Our Mission",
  //   href: "/our-mission",
  // },
  {
    name: translate("Navbar.projects"),
    href: "/projects",
  },
  // {
  //   name: "Get Involved",
  //   href: "/get-involved",
  // },
  {
    name: translate("Navbar.contactUs"),
    href: "/contact-us",
  },
  {
    name: translate("donate"),
    href: "/donate",
  },
];
