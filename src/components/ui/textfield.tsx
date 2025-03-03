import { Description, Field, Input, Label } from "@headlessui/react";

import { cn } from "../../utils";

interface Props extends React.ComponentProps<"input"> {
  label?: string;
  helperText?: string;
}

export function TextField({ label, helperText, className, ...props }: Props) {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        {label && (
          <Label className="text-sm font-medium text-white">{label}</Label>
        )}
        <Input
          className={cn(
            "mt-3 block w-full rounded-sm bg-white/5 px-3 py-1.5 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            className,
          )}
          {...props}
        />
        {helperText && (
          <Description className="text-sm/6 text-white/50">
            {helperText}
          </Description>
        )}
      </Field>
    </div>
  );
}
