"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import styles from "./slider.module.css";
import { cn } from "./utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        styles.root,
        className,
        props?.disabled ? styles.disabled : undefined,
        props?.orientation === "vertical" ? styles.vertical : undefined
      )}
      {...props}
    >
      <SliderPrimitive.Track data-slot="slider-track" className={styles.track}>
        <SliderPrimitive.Range data-slot="slider-range" className={styles.range} />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb data-slot="slider-thumb" key={index} className={styles.thumb} />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
