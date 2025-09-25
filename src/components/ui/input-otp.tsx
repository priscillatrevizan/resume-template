"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

import styles from "./input-otp.module.css";
import { cn } from "./utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(styles.container, containerClassName)}
      className={cn(styles.input, className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="input-otp-group" className={cn(styles.group, className)} {...props} />;
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext) as any;
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots?.[index] ?? {};

  return (
    <div data-slot="input-otp-slot" data-active={isActive} className={cn(styles.slot, className)} {...props}>
      {char}
      {hasFakeCaret && (
        <div className={styles.caretWrapper}>
          <div className={styles.caret} />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
