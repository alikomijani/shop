import { OutlineMenuIcon } from "@/icons/outline-menu";
import { Input } from "@/components/ui/input";
import { MobileLogoIcon } from "@/icons/mobile-logo";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header>
      <section className="bg-primary hidden p-1 text-center text-white md:block">
        با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید
      </section>
      <section>
        <div className="p-5">
          <div className="container mx-auto flex items-center justify-between gap-2">
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <OutlineMenuIcon className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4 p-4">
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
            {/* Desktop Menu */}
            <nav className="hidden gap-6 text-lg font-medium md:flex">
              <a href="/">خانه</a>
              <a href="/about">درباره ما</a>
            </nav>
            <Input
              type="search"
              placeholder="جستجو"
              className="flex-grow rounded-3xl"
            />
            <MobileLogoIcon className="size-14" />
          </div>
        </div>
      </section>
    </header>
  );
}
