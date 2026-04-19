/**
 * Uses the project `date` field’s calendar year vs the current year:
 * - upcoming: project year is in the future
 * - ongoing: project year is the current year
 * - past: project year is before the current year
 */
export type ProjectTimelineStatus = "upcoming" | "ongoing" | "past";

export function getProjectYearAndStatus(
  dateStr: string | undefined,
): {
  year: number | null;
  status: ProjectTimelineStatus | "unknown";
} {
  if (!dateStr) {
    return { year: null, status: "unknown" };
  }
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) {
    return { year: null, status: "unknown" };
  }
  const year = d.getFullYear();
  const currentYear = new Date().getFullYear();
  if (year > currentYear) {
    return { year, status: "upcoming" };
  }
  if (year < currentYear) {
    return { year, status: "past" };
  }
  return { year, status: "ongoing" };
}

export function projectTimelineBadgeClass(
  status: ProjectTimelineStatus,
): string {
  switch (status) {
    case "upcoming":
      return "bg-secondary text-white";
    case "ongoing":
      return "bg-emerald-600 text-white";
    case "past":
      return "bg-neutral-600 text-white";
    default:
      return "bg-neutral-500 text-white";
  }
}
