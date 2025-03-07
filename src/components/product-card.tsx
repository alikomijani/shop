import { cn } from "@/lib/utils";

type Props = {
  title: string;
  price: string;
  id: string;
  image: string;
  className?: string;
};
export function ProductCard({
  title,
  id,
  price,
  image,
  className,
}: Props & { image: string }) {
  return (
    <a
      href={`/product/${id}`}
      className={cn("rounded-md border border-gray-200 p-2", className)}
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full rounded-md object-cover"
      />
      <div className="product-info mt-2">
        <h2>{title}</h2>
        <del className="text-sm text-gray-500">
          {(+price).toLocaleString("fa-IR")}
        </del>
        <p className="text-md font-semibold">
          {(+price).toLocaleString("fa-IR")} تومان
        </p>
      </div>
    </a>
  );
}
