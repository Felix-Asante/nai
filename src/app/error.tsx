"use client";

import { routing } from "@/i18n/routing";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import {
  AlertTriangleIcon,
  HomeIcon,
  RefreshCwIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
  unstable_retry: () => void;
}>;

export default function ErrorPage({
  error,
  reset,
  unstable_retry,
}: ErrorPageProps) {
  const homeHref = `/${routing.defaultLocale}`;
  const recover = unstable_retry ?? reset;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-white px-6 py-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(11,60,117,0.08),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-rose-100/50 blur-3xl -z-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-primary-100/40 blur-3xl -z-10"
        aria-hidden
      />

      <div className="relative w-full max-w-xl text-center">
        <div className="relative mx-auto inline-block">
          <span
            className="block text-[100px] leading-none font-bold tracking-tighter bg-gradient-to-br from-rose-600 via-primary-600 to-primary-800 bg-clip-text text-transparent sm:text-[160px] md:text-[200px]"
            aria-hidden
          >
            !
          </span>
          <span className="absolute inset-x-0 -bottom-2 flex justify-center md:-bottom-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 shadow-soft ring-1 ring-neutral-200">
              <AlertTriangleIcon className="h-3.5 w-3.5 text-rose-500" />
              Error
            </span>
          </span>
        </div>

        <h1 className="mt-14 text-2xl font-semibold tracking-tight text-primary-800 sm:text-3xl md:mt-16 md:text-4xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
          We couldn&apos;t load this page. You can try again, or go back to the
          homepage.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => recover()}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-full bg-primary-700 px-6 hover:bg-primary-800"
            )}
          >
            <RefreshCwIcon className="h-4 w-4" />
            Try again
          </button>
          <Link
            href={homeHref}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 rounded-full border-neutral-300 px-6 text-neutral-700 hover:bg-neutral-50"
            )}
          >
            <HomeIcon className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50/80 p-4 text-left text-sm text-neutral-700 shadow-inner">
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Development details
            </p>
            {error.digest && (
              <p className="mt-2 font-mono text-xs text-neutral-600">
                <span className="text-neutral-400">Digest:</span>{" "}
                {error.digest}
              </p>
            )}
            <pre className="mt-2 max-h-40 overflow-auto whitespace-pre-wrap break-words font-mono text-xs text-rose-800">
              {error.message}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
