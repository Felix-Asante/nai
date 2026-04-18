import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function RootNotFound() {
  const t = await getTranslations("NotFound");

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(11,60,117,0.08),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-primary-100/40 blur-3xl -z-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-secondary-100/40 blur-3xl -z-10"
        aria-hidden
      />

      <div className="relative text-center max-w-xl">
        <span className="block text-[120px] sm:text-[180px] md:text-[220px] leading-none font-bold tracking-tighter bg-gradient-to-br from-primary-700 via-primary-600 to-secondary bg-clip-text text-transparent">
          404
        </span>
        <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-primary-700">
          {t("title")}
        </h1>
        <p className="mt-4 text-base md:text-lg text-neutral-600 leading-relaxed">
          {t("description")}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-primary-700 hover:bg-primary-800 text-white text-sm font-medium shadow-soft transition-colors"
          >
            {t("actions.backHome")}
          </Link>
        </div>
      </div>
    </main>
  );
}
