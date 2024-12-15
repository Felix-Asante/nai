import { useState, useCallback } from "react";

export function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        console.warn("Clipboard not supported");
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, timeout);

        return true;
      } catch (error) {
        console.warn("Copy failed", error);
        setCopied(false);
        return false;
      }
    },
    [timeout]
  );

  return { copied, copy };
}
