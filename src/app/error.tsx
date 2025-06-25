"use client";
import Button from "@/components/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error.message);
  return (
    <html>
      <body className="flex items-center justify-center flex-col w-full h-full gap-5">
        <h2>Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
