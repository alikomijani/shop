import { OutlineMenuIcon } from "@/icons/outline-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { categories } from "@/pages/data";
export default function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <OutlineMenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-5 p-4">
            {categories.map((item) => (
              <a href={`/${item.slug}`} className="text-lg font-medium">
                {item.title}
              </a>
            ))}
            <a href="/" className="text-lg font-medium">
              خانه
            </a>
            <a href="/about" className="text-lg font-medium">
              درباره ما
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
