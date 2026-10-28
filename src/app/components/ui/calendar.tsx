"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "./utils";
import { buttonVariants } from "./button";
import styles from "./calendar.module.css";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(styles.icon, className)}
      classNames={{
        months: styles.column,
        month: styles.column2,
        caption: styles.row,
        caption_label: styles.icon2,
        nav: styles.row2,
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          styles.iconSize,
        ),
        nav_button_previous: styles.icon3,
        nav_button_next: styles.icon4,
        table: styles.icon5,
        head_row: styles.row3,
        head_cell:
          styles.icon6,
        row: styles.row4,
        cell: cn(
          styles.icon7,
          props.mode === "range"
            ? styles.icon8
            : styles.icon9,
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          styles.iconSize2,
        ),
        day_range_start:
          styles.icon10,
        day_range_end:
          styles.icon11,
        day_selected:
          styles.icon12,
        day_today: styles.icon13,
        day_outside:
          styles.icon14,
        day_disabled: styles.icon15,
        day_range_middle:
          styles.icon16,
        day_hidden: styles.icon17,
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn(styles.iconSize3, className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn(styles.iconSize3, className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
