"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import styles from "./calendar.module.css";

import buttonStyles from "./button.module.css";
import { cn } from "./utils";

function Calendar({ className, classNames, showOutsideDays = true, ...props }: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(styles.root, className)}
      classNames={{
        months: styles.months,
        month: styles.month,
        caption: styles.caption,
        caption_label: styles.captionLabel,
        nav: styles.nav,
        nav_button: cn(buttonStyles.button, buttonStyles.outline, styles.navButton),
        nav_button_previous: styles.navButtonPrevious,
        nav_button_next: styles.navButtonNext,
        table: styles.table,
        head_row: styles.headRow,
        head_cell: styles.headCell,
        row: styles.row,
        cell: cn(styles.cell, props.mode === "range" ? styles.cellRange : styles.cellSingle),
        day: cn(buttonStyles.button, buttonStyles.ghost, styles.day),
        day_range_start: styles.dayRangeStart,
        day_range_end: styles.dayRangeEnd,
        day_selected: styles.daySelected,
        day_today: styles.dayToday,
        day_outside: styles.dayOutside,
        day_disabled: styles.dayDisabled,
        day_range_middle: styles.dayRangeMiddle,
        day_hidden: styles.dayHidden,
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => <ChevronLeft className={cn(styles.day, className)} {...props} />,
        IconRight: ({ className, ...props }) => <ChevronRight className={cn(styles.day, className)} {...props} />,
      }}
      {...props}
    />
  );
}

export { Calendar };
