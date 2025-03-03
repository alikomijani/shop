import { Button as HButton } from "@headlessui/react";
import { cn } from "../../utils";

type Props = React.ComponentProps<"button">;

export default function Button({ className, ...props }: Props) {
  return (
    <HButton
      className={cn(
        className,
        "bg-primary rounded-sm px-4 py-2 text-sm text-white",
      )}
      {...props}
    />
  );
}
