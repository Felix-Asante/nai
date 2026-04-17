import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { cn } from "@/utils";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button"> & {
  btnClassName?: string;
};

const baseBtn =
  "inline-flex items-center justify-center w-11 h-11 rounded-full border border-neutral-200 bg-white text-primary-700 shadow-sm transition-all hover:bg-primary-700 hover:text-white hover:border-primary-700 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-primary-700 disabled:hover:border-neutral-200";

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, btnClassName, ...restProps } = props;
  return (
    <button
      type="button"
      aria-label="Previous"
      className={cn(baseBtn, btnClassName)}
      {...restProps}
    >
      <ArrowLeftIcon className="w-4 h-4" />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, btnClassName, ...restProps } = props;
  return (
    <button
      type="button"
      aria-label="Next"
      className={cn(baseBtn, btnClassName)}
      {...restProps}
    >
      <ArrowRightIcon className="w-4 h-4" />
      {children}
    </button>
  );
};
