import { PortableTextComponents } from "@portabletext/react";
import YoutubeIframe from "./YoutubeIframe";
import RefLink from "./RefLink";
import Table from "./Table";
import { QuizValueProps, TableValueProps } from "@/types";
import Quiz from "./Quiz";
import PortableImage from "./PortableImage";
import HashScroll from "./HashScroll";
import getYoutubeId from "@/utils";
import { LinkIcon, MessageSquareQuoteIcon } from "lucide-react";
import { slugify } from "@/utils/slugify";

export const CustomPortableTextComponents: PortableTextComponents = {
  types: {
    image: PortableImage,
    youtube: ({ value }: { value: { url: string } }) => {
      const id = getYoutubeId(value.url);
      return <YoutubeIframe videoId={id} />;
    },
    customTable: ({ value }: { value: TableValueProps }) => (
      <Table value={value} />
    ),
    quiz: ({ value }: { value: QuizValueProps }) => <Quiz value={value} />,
  },

  block: {
    normal: ({ children }) => <p className="my-2">{children}</p>,
    h2: ({ children }) => (
      <h2
        id={slugify(children as string)}
        className="before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 lg:text-4xl text-3xl text-zinc-700 my-2"
      >
        <HashScroll text={children} />
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugify(children as string)}
        className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative block lg:font-bold font-semibold tracking-tight lg:text-3xl text-2xl dark:text-zinc-100 text-zinc-700 my-2"
      >
        <HashScroll text={children} />
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={slugify(children as string)}
        className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-6 before:-left-4 lg:before:text-2xl before:text-xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-xl dark:text-zinc-100 text-zinc-700 my-2"
      >
        <HashScroll text={children} />
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative overflow-hidden tracking-tight text-lg my-8 lg:py-6 lg:pl-6 pr-12 p-4 border dark:border-zinc-800 border-zinc-200 rounded-md">
        <MessageSquareQuoteIcon
          className="text-7xl absolute -top-7 -right-5 -rotate-12 dark:text-zinc-800 text-zinc-200"
          aria-hidden="true"
        />
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="font-incognito font-medium italic">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-bold dark:text-zinc-300 text-zinc-700">
        {children}
      </strong>
    ),
    link: ({ children, value }) => {
      return (
        <RefLink href={value?.href} className=" text-primary hover:underline">
          {children} <LinkIcon className="inline" aria-hidden="true" />
        </RefLink>
      );
    },
    code: ({ children }) => (
      <code className="font-incognito py-[0.15rem] px-1 rounded-sm font-medium dark:bg-primary-bg bg-secondary-bg dark:text-zinc-200 text-pink-500">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-[square] mt-5 ml-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal mt-5 ml-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-4">{children}</li>,
    number: ({ children }) => <li className="mb-4">{children}</li>,
  },
};
